#!/usr/bin/env node

/**
 * Femure Hostinger Deployment Script (Node.js)
 * This script builds and deploys the Next.js app to Hostinger via FTP
 * 
 * Usage: node deploy.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function loadEnv() {
  const envPath = path.join(__dirname, '.env.deploy');
  
  if (!fs.existsSync(envPath)) {
    log('❌ Error: .env.deploy file not found!', colors.red);
    console.log('');
    log('Please create a .env.deploy file with the following variables:', colors.yellow);
    console.log('');
    console.log('FTP_HOST=your-domain.com');
    console.log('FTP_USER=your-ftp-username');
    console.log('FTP_PASS=your-ftp-password');
    console.log('FTP_PORT=21');
    console.log('REMOTE_DIR_ENV=/public_html');
    console.log('');
    log('You can copy env.deploy.example to .env.deploy and fill in your credentials.', colors.yellow);
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  
  envContent.split('\n').forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      env[key.trim()] = valueParts.join('=').trim();
    }
  });

  return env;
}

async function main() {
  log('🚀 Starting Femure Deployment to Hostinger...', colors.blue);
  console.log('');

  // Load environment variables
  const env = loadEnv();

  // Validate required variables
  if (!env.FTP_HOST || !env.FTP_USER || !env.FTP_PASS) {
    log('❌ Error: Missing required FTP credentials in .env.deploy', colors.red);
    log('Required: FTP_HOST, FTP_USER, FTP_PASS', colors.yellow);
    process.exit(1);
  }

  const REMOTE_DIR = env.REMOTE_DIR_ENV || '/public_html';

  // Step 1: Build
  log('📦 Step 1: Building Next.js application...', colors.blue);
  try {
    execSync('npm run build', { stdio: 'inherit' });
    log('✅ Build completed successfully!', colors.green);
    console.log('');
  } catch (error) {
    log('❌ Build failed!', colors.red);
    process.exit(1);
  }

  // Check if build directory exists
  const buildDir = path.join(__dirname, 'out');
  if (!fs.existsSync(buildDir)) {
    log('❌ Error: Build directory "out" not found!', colors.red);
    process.exit(1);
  }

  // Step 2: Deploy
  log('📤 Step 2: Deploying to Hostinger...', colors.blue);
  log(`Host: ${env.FTP_HOST}`, colors.reset);
  log(`Remote Directory: ${REMOTE_DIR}`, colors.reset);
  console.log('');

  // Check if ftp-deploy is installed
  try {
    require.resolve('ftp-deploy');
  } catch (e) {
    log('⚠️  Installing ftp-deploy package...', colors.yellow);
    try {
      execSync('npm install --no-save ftp-deploy', { stdio: 'inherit' });
      log('✅ ftp-deploy installed successfully!', colors.green);
    } catch (error) {
      log('❌ Failed to install ftp-deploy', colors.red);
      log('Please run: npm install --no-save ftp-deploy', colors.yellow);
      process.exit(1);
    }
  }

  const FtpDeploy = require('ftp-deploy');
  const ftpDeploy = new FtpDeploy();

  const config = {
    user: env.FTP_USER,
    password: env.FTP_PASS,
    host: env.FTP_HOST,
    port: parseInt(env.FTP_PORT) || 21,
    localRoot: buildDir,
    remoteRoot: REMOTE_DIR,
    include: ['*', '**/*'],
    exclude: [],
    deleteRemote: false, // Set to true to delete files on server that don't exist locally
    forcePasv: true,
    sftp: false,
  };

  log('🔄 Uploading files...', colors.blue);
  
  ftpDeploy.on('uploading', (data) => {
    const percent = Math.round((data.transferredFileCount / data.totalFilesCount) * 100);
    process.stdout.write(`\r📤 Progress: ${percent}% (${data.transferredFileCount}/${data.totalFilesCount}) - ${data.filename}`);
  });

  ftpDeploy.on('uploaded', (data) => {
    console.log(''); // New line after progress
    log(`✅ Uploaded: ${data.filename}`, colors.green);
  });

  ftpDeploy.on('log', (data) => {
    log(data, colors.reset);
  });

  try {
    await ftpDeploy.deploy(config);
    console.log('');
    log('✅ Deployment completed successfully!', colors.green);
    console.log('');
    log(`🌐 Your site should now be live at: http://${env.FTP_HOST}`, colors.blue);
    console.log('');
  } catch (error) {
    console.log('');
    log('❌ Deployment failed!', colors.red);
    log(error.message, colors.red);
    process.exit(1);
  }
}

main().catch(error => {
  log('❌ Unexpected error:', colors.red);
  console.error(error);
  process.exit(1);
});

