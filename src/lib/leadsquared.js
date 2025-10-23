/**
 * LeadSquared CRM Integration Utility
 * Handles form submissions to LeadSquared CRM
 */

// LeadSquared API Configuration
const LEAD_SQUARED_CONFIG = {
    // These will be set via environment variables
    accessKey: process.env.NEXT_PUBLIC_LEADSQUARED_ACCESS_KEY || '',
    secretKey: process.env.NEXT_PUBLIC_LEADSQUARED_SECRET_KEY || '',
    apiUrl: 'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture',
    devMode: process.env.NEXT_PUBLIC_LEADSQUARED_DEV_MODE === 'true',
};

/**
 * Generate LeadSquared authentication headers
 */
function getAuthHeaders() {
    const timestamp = new Date().toISOString();
    const stringToSign = `POST\n${timestamp}\n${LEAD_SQUARED_CONFIG.apiUrl}`;
    
    // For now, we'll use a simpler approach with access key
    // In production, you should implement proper HMAC-SHA256 signing
    return {
        'Content-Type': 'application/json',
        'AccessKey': LEAD_SQUARED_CONFIG.accessKey,
        'SecretKey': LEAD_SQUARED_CONFIG.secretKey,
        'Timestamp': timestamp,
    };
}

/**
 * Build LeadSquared payload from form data
 */
function buildLeadSquaredPayload(formData, formType = 'general', additionalData = {}) {
    const payload = {
        // Core LeadSquared fields
        FirstName: formData.name || '',
        Phone: formData.mobile || '',
        
        // Essential custom fields only
        mx_Query: formData.query || '',
        mx_SelectedCondition: formData.selectedCondition || formData.condition || '',
        mx_SelectedPlan: additionalData.selectedPlan || '',
        
        // System data
        mx_FormType: formType,
        mx_Device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        mx_SubmissionTime: new Date().toISOString(),
        
        // UTM tracking data
        mx_UTMSource: formData.utmSource || 'Direct',
        mx_UTMMedium: formData.utmMedium || 'Website',
        mx_UTMCampaign: formData.utmCampaign || 'Homeopathy-Consultation',
        mx_UTMContent: formData.utmContent || '',
        mx_UTMTerm: formData.utmTerm || '',
    };

    // Remove empty values
    Object.keys(payload).forEach(key => {
        if (payload[key] === '' || payload[key] === null || payload[key] === undefined) {
            delete payload[key];
        }
    });

    return payload;
}

/**
 * Submit lead to LeadSquared
 */
export async function submitToLeadSquared(formData, formType = 'general', additionalData = {}) {
    try {
        // Validate required fields - Only Phone is mandatory
        if (!formData.mobile) {
            throw new Error('Mobile number is required');
        }

        // Build payload
        const payload = buildLeadSquaredPayload(formData, formType, additionalData);

        // For development/testing, log the payload
        if (process.env.NODE_ENV === 'development') {
            console.log('LeadSquared Payload:', payload);
        }

        // Check if we have valid credentials or if in dev mode
        if (!LEAD_SQUARED_CONFIG.accessKey || !LEAD_SQUARED_CONFIG.secretKey || LEAD_SQUARED_CONFIG.devMode) {
            console.warn('LeadSquared credentials not configured or in dev mode. Form data:', payload);
            // Return success for development
            return { success: true, message: 'Lead captured (development mode)' };
        }

        // Make API call to LeadSquared
        const response = await fetch(LEAD_SQUARED_CONFIG.apiUrl, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`LeadSquared API error: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        
        return {
            success: true,
            message: 'Lead successfully submitted to LeadSquared',
            data: result,
        };

    } catch (error) {
        console.error('LeadSquared submission error:', error);
        
        // For development, still return success but log the error
        if (process.env.NODE_ENV === 'development' || LEAD_SQUARED_CONFIG.devMode) {
            console.log('Development mode: Simulating successful submission');
            return { 
                success: true, 
                message: 'Lead captured (development mode)',
                error: error.message 
            };
        }
        
        throw error;
    }
}

/**
 * Validate phone number format
 */
export function validatePhoneNumber(phone) {
    if (!phone) return false;
    
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if it's a valid Indian mobile number (10 digits starting with 6-9)
    if (cleanPhone.length === 10 && /^[6-9]/.test(cleanPhone)) {
        return true;
    }
    
    // Check if it's a valid international number (10-15 digits)
    if (cleanPhone.length >= 10 && cleanPhone.length <= 15) {
        return true;
    }
    
    return false;
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone) {
    if (!phone) return '';
    
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (cleanPhone.length === 10) {
        return `+91 ${cleanPhone.slice(0, 5)} ${cleanPhone.slice(5)}`;
    }
    
    return phone;
}

/**
 * Get form type based on context
 */
export function getFormType(selectedDoctor, selectedCondition) {
    if (selectedCondition) {
        return 'condition-consultation';
    } else {
        return 'general-inquiry';
    }
}

export default {
    submitToLeadSquared,
    validatePhoneNumber,
    formatPhoneNumber,
    getFormType,
};
