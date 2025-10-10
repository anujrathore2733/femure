# 🚀 Quick Deploy to Hostinger

## One-Time Setup (5 minutes)

1. **Copy the environment file:**
   ```bash
   cp env.deploy.example .env.deploy
   ```

2. **Edit `.env.deploy` with your Hostinger FTP credentials:**
   ```bash
   FTP_HOST=yourdomain.com
   FTP_USER=your-ftp-username
   FTP_PASS=your-ftp-password
   FTP_PORT=21
   REMOTE_DIR_ENV=/public_html
   ```

   Get these from: Hostinger Dashboard → Files → FTP Accounts

## Deploy Your Site

**Option 1: Using npm (Recommended)**
```bash
npm run deploy
```

**Option 2: Using Node directly**
```bash
node deploy.js
```

**Option 3: Using Bash script (Mac/Linux)**
```bash
npm run deploy:bash
```

## What Happens?

1. ✅ Builds your Next.js app (`npm run build`)
2. ✅ Uploads `out/` folder to Hostinger
3. ✅ Your site goes live! 🎉

## Troubleshooting

**"Cannot find .env.deploy"**
- Run: `cp env.deploy.example .env.deploy`
- Fill in your FTP credentials

**"FTP connection failed"**
- Check your credentials in `.env.deploy`
- Verify FTP host and port
- Contact Hostinger support if needed

**Need more help?**
- See detailed guide: [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)
- Hostinger support: https://support.hostinger.com

## 🎯 That's it!

Visit your domain to see your live site! 🌐

