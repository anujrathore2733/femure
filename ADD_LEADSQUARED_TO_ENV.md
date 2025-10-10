# Add LeadSquared Credentials to .env.deploy

Since you're using `.env.deploy` for all your environment variables, please add the following lines to your existing `.env.deploy` file:

## Add these lines to your .env.deploy file:

```env
# LeadSquared CRM Configuration
# Get these from your LeadSquared account settings
NEXT_PUBLIC_LEADSQUARED_ACCESS_KEY=your_actual_access_key
NEXT_PUBLIC_LEADSQUARED_SECRET_KEY=your_actual_secret_key

# Development Mode (set to 'true' for testing, 'false' for production)
NEXT_PUBLIC_LEADSQUARED_DEV_MODE=true
```

## Steps:

1. **Get your LeadSquared credentials:**
   - Log into your LeadSquared account
   - Go to **Settings** → **API & Integrations**
   - Get your **Access Key** and **Secret Key**

2. **Edit your .env.deploy file:**
   - Open `.env.deploy` in your text editor
   - Add the LeadSquared configuration lines above
   - Replace `your_actual_access_key` and `your_actual_secret_key` with your real credentials

3. **For testing (development mode):**
   - Keep `NEXT_PUBLIC_LEADSQUARED_DEV_MODE=true`
   - This will log form data to console instead of sending to LeadSquared

4. **For production:**
   - Set `NEXT_PUBLIC_LEADSQUARED_DEV_MODE=false`
   - This will send real data to LeadSquared

## Example of complete .env.deploy file:

```env
# Hostinger FTP Credentials
FTP_HOST=193.203.185.212
FTP_USER=u163260349.femure.in
FTP_PASS=femureFTP@2901
FTP_PORT=21
REMOTE_DIR_ENV=/public_html

# LeadSquared CRM Configuration
NEXT_PUBLIC_LEADSQUARED_ACCESS_KEY=your_actual_access_key
NEXT_PUBLIC_LEADSQUARED_SECRET_KEY=your_actual_secret_key
NEXT_PUBLIC_LEADSQUARED_DEV_MODE=true
```

## After adding credentials:

1. **Test locally:** Run `npm run dev` and test the forms
2. **Check console:** Look for "LeadSquared Payload:" logs in browser console
3. **Deploy:** Run `npm run deploy` to deploy with LeadSquared integration

## Need help?

- Check `LEADSQUARED_SETUP.md` for detailed setup instructions
- The integration will work in development mode even without valid credentials
- All form data will be logged to console for testing
