# SweetAI App

Web3 NFT Minting Dashboard with React + FastAPI

## 🚀 Quick Start

### 1. Environment Setup

Set these variables in Replit Secrets:
```env
VITE_API_BASE_URL=https://your-repl-url.repl.co
MUMBAI_WSS=wss://polygon-mumbai.g.alchemy.com/v2/your-key
NFT_CONTRACT_ADDRESS=0xYourContractAddress
```

### 2. Installation

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
pip install -r requirements.txt
```

### 3. Start Application

```bash
# Start both frontend and backend using PM2
pm2 start ecosystem.config.js
```

## 📁 Project Structure
