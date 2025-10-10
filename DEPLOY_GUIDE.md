# 🚀 Femure Deployment Guide for Hostinger

This guide explains how to deploy your Femure Next.js application to Hostinger hosting.

## 📋 Prerequisites

1. **Hostinger Account** with an active hosting plan
2. **FTP Credentials** from Hostinger
3. **Node.js** installed on your local machine

## 🔧 Setup Instructions

### Step 1: Get Your Hostinger FTP Credentials

1. Log in to your Hostinger account
2. Go to **Hosting** → **Manage**
3. Navigate to **Files** → **FTP Accounts**
4. Note down:
   - **FTP Host** (e.g., `ftp.yourdomain.com` or `yourdomain.com`)
   - **FTP Username** (usually your domain or hosting username)
   - **FTP Password** (create one if you haven't)
   - **FTP Port** (usually `21`)

### Step 2: Configure Deployment Credentials

1. Copy the example environment file:
   ```bash
   cp env.deploy.example .env.deploy
   ```

2. Edit `.env.deploy` with your actual Hostinger credentials:
   ```bash
   FTP_HOST=yourdomain.com
   FTP_USER=your-ftp-username
   FTP_PASS=your-ftp-password
   FTP_PORT=21
   REMOTE_DIR_ENV=/public_html
   ```

   **Important Notes:**
   - Replace `yourdomain.com` with your actual domain
   - Replace `your-ftp-username` and `your-ftp-password` with your FTP credentials
   - `REMOTE_DIR_ENV` is usually `/public_html` or `/domains/yourdomain.com/public_html`
   - **Never commit `.env.deploy` to git!** (It's already in `.gitignore`)

### Step 3: Make Deployment Script Executable (Bash Script)

If using the bash script:
```bash
chmod +x deploy.sh
```

## 🚀 Deployment Methods

### Method 1: Using Node.js Script (Recommended - Cross-platform)

```bash
node deploy.js
```

**Advantages:**
- Works on Windows, Mac, and Linux
- Automatic dependency installation
- Better progress reporting
- More reliable FTP handling

**First-time setup:**
The script will automatically install the required `ftp-deploy` package if needed.

### Method 2: Using Bash Script (Mac/Linux)

```bash
./deploy.sh
```

**Requirements:**
- `lftp` must be installed (script will try to install via Homebrew)
- Mac or Linux operating system

**Install lftp manually:**
- **Mac:** `brew install lftp`
- **Ubuntu/Debian:** `sudo apt-get install lftp`
- **CentOS/RHEL:** `sudo yum install lftp`

### Method 3: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload via FTP Client:**
   - Use FileZilla, Cyberduck, or any FTP client
   - Connect using your Hostinger FTP credentials
   - Upload all contents of the `out/` folder to `/public_html/`

## 📁 Directory Structure on Hostinger

After deployment, your Hostinger directory should look like:

```
/public_html/
├── _next/
│   ├── static/
│   └── ...
├── index.html
├── 404.html
├── favicon.ico
├── img1.png
├── img2.png
├── img3.png
├── logo.svg
└── ...
```

## ✅ Verification

After deployment:

1. Visit your domain: `http://yourdomain.com`
2. Check that:
   - ✅ Homepage loads correctly
   - ✅ Images display properly
   - ✅ Navigation works
   - ✅ Consultation modal opens
   - ✅ All sections are visible

## 🔄 Updating Your Site

To deploy updates:

1. Make your changes locally
2. Test thoroughly (`npm run dev`)
3. Run the deployment script:
   ```bash
   node deploy.js
   ```

The script will:
- Build the latest version
- Upload all files to Hostinger
- Your site will be updated automatically

## 🛠️ Troubleshooting

### Issue: "FTP connection failed"

**Solutions:**
- Verify your FTP credentials in `.env.deploy`
- Check if your IP is not blocked by Hostinger firewall
- Try using your domain instead of FTP host (or vice versa)
- Ensure FTP port is correct (usually 21)

### Issue: "Permission denied"

**Solutions:**
- Verify your FTP user has write permissions
- Check the `REMOTE_DIR_ENV` path is correct
- Contact Hostinger support to verify FTP access

### Issue: "Build failed"

**Solutions:**
- Run `npm install` to ensure all dependencies are installed
- Check for any errors in your code
- Try `npm run build` separately to see detailed errors

### Issue: "Site shows 404 or blank page"

**Solutions:**
- Ensure files are uploaded to the correct directory (`/public_html/`)
- Check that `index.html` exists in the root
- Verify file permissions (should be 644 for files, 755 for directories)
- Clear your browser cache

### Issue: "Images not loading"

**Solutions:**
- Check that all image files are in the `out/` folder before deployment
- Verify image paths in your code are correct
- Ensure images are uploaded to Hostinger

## 🔐 Security Notes

1. **Never commit `.env.deploy` to git** - It contains sensitive credentials
2. **Use strong FTP passwords**
3. **Consider using SFTP** (port 22) if your Hostinger plan supports it
4. **Regularly update your FTP password**

## 📞 Support

If you encounter issues:

1. **Hostinger Support:** Check their knowledge base or contact support
2. **Check deployment logs:** The scripts provide detailed error messages
3. **Verify FTP access:** Test your credentials with an FTP client like FileZilla

## 🎉 Success!

Once deployed, your Femure website will be live and accessible to users worldwide!

For any questions or issues, refer to:
- Hostinger Documentation: https://support.hostinger.com
- Next.js Documentation: https://nextjs.org/docs

