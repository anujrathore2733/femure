#!/bin/bash

# Femure Hostinger Deployment Script
# This script builds the Next.js app and deploys it to Hostinger

set -e  # Exit on any error

echo "🚀 Starting Femure Deployment to Hostinger..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
BUILD_DIR="out"
REMOTE_DIR="/public_html"  # Change this to your Hostinger public directory path

# Check if .env file exists for FTP credentials
if [ ! -f .env.deploy ]; then
    echo -e "${RED}❌ Error: .env.deploy file not found!${NC}"
    echo ""
    echo "Please create a .env.deploy file with the following variables:"
    echo ""
    echo "FTP_HOST=your-domain.com"
    echo "FTP_USER=your-ftp-username"
    echo "FTP_PASS=your-ftp-password"
    echo "FTP_PORT=21"
    echo "REMOTE_DIR=/public_html"
    echo ""
    exit 1
fi

# Load environment variables
source .env.deploy

# Validate required variables
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USER" ] || [ -z "$FTP_PASS" ]; then
    echo -e "${RED}❌ Error: Missing required FTP credentials in .env.deploy${NC}"
    exit 1
fi

# Use REMOTE_DIR from .env.deploy if set
if [ ! -z "$REMOTE_DIR_ENV" ]; then
    REMOTE_DIR="$REMOTE_DIR_ENV"
fi

echo -e "${BLUE}📦 Step 1: Building Next.js application...${NC}"
npm run build

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Error: Build directory '$BUILD_DIR' not found!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully!${NC}"
echo ""

echo -e "${BLUE}📤 Step 2: Deploying to Hostinger...${NC}"
echo "Host: $FTP_HOST"
echo "Remote Directory: $REMOTE_DIR"
echo ""

# Check if lftp is installed
if ! command -v lftp &> /dev/null; then
    echo -e "${YELLOW}⚠️  lftp is not installed. Installing via Homebrew...${NC}"
    
    if ! command -v brew &> /dev/null; then
        echo -e "${RED}❌ Error: Homebrew is not installed. Please install it first:${NC}"
        echo "/bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
        exit 1
    fi
    
    brew install lftp
fi

# Create lftp script
cat > /tmp/lftp_script.txt << EOF
set ftp:ssl-allow no
set ssl:verify-certificate no
open -u $FTP_USER,$FTP_PASS $FTP_HOST
mirror --reverse --delete --verbose --parallel=10 $BUILD_DIR $REMOTE_DIR
bye
EOF

echo -e "${BLUE}🔄 Uploading files...${NC}"
lftp -f /tmp/lftp_script.txt

# Clean up
rm /tmp/lftp_script.txt

echo ""
echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo -e "${BLUE}🌐 Your site should now be live at: http://$FTP_HOST${NC}"
echo ""

