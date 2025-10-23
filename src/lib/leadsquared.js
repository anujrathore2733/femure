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
        'x-LSQ-AccessKey': LEAD_SQUARED_CONFIG.accessKey,
        'x-LSQ-SecretKey': LEAD_SQUARED_CONFIG.secretKey,
        'Timestamp': timestamp,
    };
}

/**
 * Build LeadSquared payload from form data
 */
function buildLeadSquaredPayload(formData, formType = 'general', additionalData = {}) {
    // LeadSquared expects a direct array of LeadProperty objects
    const leadProperties = [
        { Attribute: 'FirstName', Value: formData.name || '' },
        { Attribute: 'Phone', Value: formData.mobile || '' },
        { Attribute: 'mx_Query', Value: formData.query || '' },
        { Attribute: 'mx_SelectedCondition', Value: formData.selectedCondition || formData.condition || '' },
        { Attribute: 'mx_SelectedPlan', Value: additionalData.selectedPlan || '' },
        { Attribute: 'mx_FormType', Value: formType },
        { Attribute: 'mx_Device', Value: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop' },
        { Attribute: 'mx_SubmissionTime', Value: new Date().toISOString() },
        { Attribute: 'mx_UTMSource', Value: formData.utmSource || 'Direct' },
        { Attribute: 'mx_UTMMedium', Value: formData.utmMedium || 'Website' },
        { Attribute: 'mx_UTMCampaign', Value: formData.utmCampaign || 'Homeopathy-Consultation' },
        { Attribute: 'mx_UTMContent', Value: formData.utmContent || '' },
        { Attribute: 'mx_UTMTerm', Value: formData.utmTerm || '' },
    ];

    // Remove empty values and return the array directly
    return leadProperties.filter(prop => 
        prop.Value && prop.Value !== '' && prop.Value !== null && prop.Value !== undefined
    );
}

/**
 * Check if lead exists in LeadSquared
 */
async function checkLeadExists(phone) {
    try {
        const searchUrl = `https://api-in21.leadsquared.com/v2/LeadManagement.svc/RetrieveLeadByPhoneNumber?phone=${encodeURIComponent(phone)}`;
        
        const response = await fetch(searchUrl, {
            method: 'GET',
            headers: getAuthHeaders(),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Lead search result:', result);
            // The API might return the lead directly or in an array
            if (result && typeof result === 'object') {
                // If it's an object with LeadId, return it
                if (result.LeadId) {
                    return result;
                }
                // If it's an array, return the first item
                if (Array.isArray(result) && result.length > 0) {
                    return result[0];
                }
            }
            return null;
        } else {
            console.warn('Lead search failed:', response.status, await response.text());
            return null;
        }
    } catch (error) {
        console.warn('Error checking existing lead:', error);
        return null;
    }
}

/**
 * Update existing lead in LeadSquared
 */
async function updateExistingLead(leadId, formData, formType, additionalData) {
    try {
        // LeadSquared requires leadId as URL parameter, not in request body
        const updateUrl = `https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Update?leadId=${encodeURIComponent(leadId)}`;
        const updatePayload = [
            { Attribute: 'mx_LastInteraction', Value: new Date().toISOString() },
            { Attribute: 'mx_InteractionCount', Value: '1' }, // This will be incremented by LeadSquared
            { Attribute: 'mx_LastFormType', Value: formType },
            { Attribute: 'mx_LastQuery', Value: formData.query || '' },
            { Attribute: 'mx_LastSelectedCondition', Value: formData.selectedCondition || formData.condition || '' },
            { Attribute: 'mx_LastSelectedPlan', Value: additionalData.selectedPlan || '' },
        ];

        console.log('Updating existing lead:', leadId, updatePayload);

        const response = await fetch(updateUrl, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(updatePayload),
        });

        if (response.ok) {
            console.log('Lead updated successfully');
            return true;
        } else {
            console.warn('Lead update failed:', response.status, await response.text());
            return false;
        }
    } catch (error) {
        console.warn('Error updating existing lead:', error);
        return false;
    }
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

        // Try to create new lead first
        const response = await fetch(LEAD_SQUARED_CONFIG.apiUrl, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            const errorData = JSON.parse(errorText);
            
            // Handle duplicate lead error specifically
            if (response.status === 500 && errorData.ExceptionType === 'MXDuplicateEntryException') {
                console.log('Duplicate lead detected, updating interaction timestamp...');
                
                // Find and update the existing lead
                const existingLead = await checkLeadExists(formData.mobile);
                console.log('Found existing lead:', existingLead);
                
                if (existingLead && (existingLead.LeadId || existingLead.ProspectID)) {
                    const leadId = existingLead.LeadId || existingLead.ProspectID;
                    console.log('Using leadId for update:', leadId);
                    
                    const updateSuccess = await updateExistingLead(
                        leadId, 
                        formData, 
                        formType, 
                        additionalData
                    );
                    
                    return {
                        success: true,
                        message: 'Welcome back to your Femure journey! Your updated request will be processed within 5-10 minutes.',
                        isUpdate: true,
                        leadId: leadId,
                        updateSuccess
                    };
                } else {
                    // Even if we can't find/update the lead, show success to user
                    console.log('Could not find existing lead for update, but duplicate was detected');
                    return {
                        success: true,
                        message: 'Welcome back to your Femure journey! Your updated request will be processed within 5-10 minutes.',
                        isUpdate: true,
                        leadId: null,
                        updateSuccess: false
                    };
                }
            }
            
            throw new Error(`LeadSquared API error: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        
        return {
            success: true,
            message: 'Your Femure journey begins now! Our expert team will contact you within 5-10 minutes.',
            data: result,
            isUpdate: false
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
