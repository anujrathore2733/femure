# LeadSquared CRM Integration Setup

This guide will help you set up LeadSquared CRM integration for your Femure website.

## Prerequisites

1. A LeadSquared account
2. Access to LeadSquared API credentials

## Step 1: Get LeadSquared API Credentials

1. Log in to your LeadSquared account
2. Go to **Settings** → **API & Integrations**
3. Create a new API key or use an existing one
4. Note down your **Access Key** and **Secret Key**

## Step 2: Configure Environment Variables

Add your LeadSquared credentials to your existing `.env.deploy` file:

```env
# LeadSquared CRM Configuration
# Get these from your LeadSquared account settings
NEXT_PUBLIC_LEADSQUARED_ACCESS_KEY=your_actual_access_key
NEXT_PUBLIC_LEADSQUARED_SECRET_KEY=your_actual_secret_key

# Development Mode (set to 'true' for testing, 'false' for production)
NEXT_PUBLIC_LEADSQUARED_DEV_MODE=false
```

## Step 3: Custom Fields in LeadSquared

The integration sends the following custom fields to LeadSquared:

### Standard Fields
- `FirstName` - User's full name
- `Phone` - Mobile number (mandatory)
- `Email` - Email address (if collected)

### Custom Fields (mx_ prefix)
- `mx_FormType` - Type of form (doctor-consultation, condition-consultation, quick-inquiry)
- `mx_ConsultationType` - Video or Audio consultation
- `mx_MedicalCondition` - Selected medical condition
- `mx_Doctor` - Selected doctor name
- `mx_SelectedCondition` - Condition title from "Know More" buttons
- `mx_SelectedDoctor` - Doctor name from doctor selection
- `mx_DoctorSpecialty` - Doctor's specialty
- `mx_ConditionTagline` - Condition tagline
- `mx_Source` - Source identifier (Femure-Website)
- `mx_Campaign` - Campaign identifier
- `mx_Device` - Device type (Mobile/Desktop)
- `mx_SubmissionTime` - Timestamp of submission

## Step 4: Create Custom Fields in LeadSquared

1. Go to **Settings** → **Custom Fields**
2. Create the following custom fields with `mx_` prefix:
   - `mx_FormType` (Text)
   - `mx_ConsultationType` (Text)
   - `mx_MedicalCondition` (Text)
   - `mx_Doctor` (Text)
   - `mx_SelectedCondition` (Text)
   - `mx_SelectedDoctor` (Text)
   - `mx_DoctorSpecialty` (Text)
   - `mx_ConditionTagline` (Text)
   - `mx_Source` (Text)
   - `mx_Campaign` (Text)
   - `mx_Device` (Text)
   - `mx_SubmissionTime` (Text)

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Fill out and submit forms on your website
3. Check your LeadSquared dashboard for new leads
4. Verify that all custom fields are populated correctly

## Development Mode

When `NEXT_PUBLIC_LEADSQUARED_DEV_MODE=true` in your `.env.deploy` file, the integration will:
- Log form data to the console instead of sending to LeadSquared
- Return success responses for testing
- Help you debug form submissions
- Work even without valid LeadSquared credentials

## Form Types

The integration handles three types of forms:

1. **Doctor Consultation** (`doctor-consultation`)
   - Triggered when a specific doctor is selected
   - Includes doctor information and condition selection

2. **Condition Consultation** (`condition-consultation`)
   - Triggered when "Know More" button is clicked
   - Includes condition-specific information

3. **Quick Inquiry** (`quick-inquiry`)
   - Simple name and mobile number form
   - Used for general inquiries

## Error Handling

The integration includes comprehensive error handling:
- Form validation (name and mobile number required)
- Phone number format validation (10-digit Indian mobile numbers)
- API error handling with user-friendly messages
- Development mode fallback for testing

## Troubleshooting

### Common Issues

1. **"LeadSquared credentials not configured"**
   - Check that your `.env.deploy` file has correct credentials
   - Ensure environment variables are prefixed with `NEXT_PUBLIC_`
   - Verify the credentials are added to the existing `.env.deploy` file

2. **"Failed to submit to LeadSquared"**
   - Verify your API credentials are correct
   - Check LeadSquared API status
   - Ensure custom fields exist in LeadSquared

3. **Custom fields not appearing**
   - Verify custom field names match exactly (including `mx_` prefix)
   - Check that custom fields are created in LeadSquared

### Debug Mode

Enable debug mode by setting in your `.env.deploy` file:
```env
NEXT_PUBLIC_LEADSQUARED_DEV_MODE=true
```

This will log all form submissions to the browser console.

## Security Notes

- Never commit `.env.deploy` to version control (it's already in your .gitignore)
- Keep your LeadSquared credentials secure
- Use environment variables for all sensitive data
- Consider using LeadSquared's webhook validation for production

## Support

For LeadSquared API issues, refer to:
- [LeadSquared API Documentation](https://developers.leadsquared.com/)
- [LeadSquared Support](https://support.leadsquared.com/)

For integration issues, check the browser console for error messages and form data logs.
