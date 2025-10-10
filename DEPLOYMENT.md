# Femure - Hostinger Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Build the Production Version
```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### 2. Upload to Hostinger

**Option A: Using File Manager (Recommended for beginners)**
1. Log into your Hostinger control panel (hPanel)
2. Go to **File Manager**
3. Navigate to `public_html/` directory
4. Delete any existing files in `public_html/`
5. Upload ALL contents from the `out/` folder to `public_html/`
   - Upload these files/folders:
     - `_next/` folder
     - `404/` folder
     - `404.html`
     - `index.html`
     - `favicon.ico`
     - All image files (`img1.png`, `img2.png`, `img3.png`, `img4.png`)
     - All SVG files (`logo.svg`, etc.)
     - Any other files in the `out/` folder

**Option B: Using FTP/SFTP**
1. Connect to your Hostinger via FTP/SFTP:
   - Host: Your domain or server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (FTP) or 22 (SFTP)
2. Navigate to `public_html/`
3. Upload all contents from the `out/` directory

**Option C: Using Terminal/SSH (Advanced)**
```bash
# Connect to your server
ssh your_username@your_domain.com

# Navigate to public_html
cd public_html

# Remove old files (be careful!)
rm -rf *

# Exit SSH
exit

# From your local machine, upload files
scp -r out/* your_username@your_domain.com:~/public_html/
```

### 3. Configure Domain Settings

If you're using a custom domain:
1. Make sure your domain points to your Hostinger server
2. Wait for DNS propagation (can take up to 48 hours)
3. Your site should be live at `https://yourdomain.com`

### 4. Test Your Website

Visit your domain and test:
- ✅ All images load correctly
- ✅ All pages work (home, 404, etc.)
- ✅ Modal popups open when clicking "Book Consultation"
- ✅ Floating call button works
- ✅ Responsive design on mobile

---

## 📁 Project Structure

```
out/
├── _next/              # Next.js optimized assets (CSS, JS)
├── 404/                # 404 error page
├── 404.html            # Root 404 fallback
├── index.html          # Main homepage
├── favicon.ico         # Website icon
├── img1.png            # Hero/carousel images
├── img2.png
├── img3.png
├── img4.png            # Community section image
├── logo.svg            # Femure logo
└── other assets...     # Additional SVG files
```

---

## 🔧 Development Commands

```bash
# Run development server
npm run dev
# Opens at http://localhost:3000 (or 3004 if 3000 is busy)

# Build for production
npm run build
# Creates optimized static export in out/

# Test production build locally
npx serve out
# Opens at http://localhost:3000
```

---

## ⚙️ Configuration Files

### `next.config.js`
- **output: 'export'** - Generates static HTML files
- **trailingSlash: true** - Adds trailing slashes to URLs
- **images.unoptimized: true** - Allows static image hosting

### `package.json`
- Simplified build scripts for standard hosting
- No GitHub Pages dependencies

---

## 🐛 Troubleshooting

### Images Not Loading
- Verify all image files are in `public_html/`
- Check file permissions (should be 644 for files, 755 for folders)
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Modal Not Opening
- Check browser console for JavaScript errors (F12)
- Ensure all files from `_next/` folder are uploaded
- Verify `.js` files have correct MIME type (application/javascript)

### 404 Errors
- Make sure `index.html` is in the root of `public_html/`
- Check `.htaccess` rules aren't blocking files
- Verify all paths are relative (no absolute paths)

### Slow Loading
- Enable Gzip compression in Hostinger cPanel
- Enable browser caching in `.htaccess`
- Consider using Hostinger's CDN if available

---

## 🔒 Security & Performance Tips

### Add to `.htaccess` (create in `public_html/` if it doesn't exist):

```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

---

## 📞 Support

For hosting issues, contact Hostinger support.
For website issues, check the browser console or contact your developer.

---

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] All files in `out/` directory
- [ ] Test modal functionality locally
- [ ] Verify all images present
- [ ] Check responsive design
- [ ] Update contact phone number in `FloatingCallButton.jsx`
- [ ] Upload all files to `public_html/`
- [ ] Test live website
- [ ] Check on mobile devices
- [ ] Verify forms work (if integrated)

---

**Your website is now ready for Hostinger! 🎉**

