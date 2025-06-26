#!/bin/bash

# Load .env.local if exists
if [ -f .env.local ]; then
  export $(cat .env.local | xargs)
fi

echo "🚀 Step 1: Compile Smart Contracts"
npx hardhat compile

echo "🧠 Step 2: Deploy Smart Contract to Polygon Mumbai"
ADDRESS=$(npx hardhat run scripts/deploy.js --network mumbai | grep "deployed at:" | awk '{print $NF}')
echo "✅ Contract deployed at: $ADDRESS"

echo "📦 Step 3: Upload metadata to web3.storage"
CID=$(npx web3.storage put ./metadata --token=$WEB3_STORAGE_TOKEN | tail -n1 | awk '{print $NF}')
echo "✅ Metadata uploaded: ipfs://$CID/metadata.json"

echo "📝 Step 4: Inject metadata URI into Vite .env"
echo "VITE_METADATA_URI=ipfs://$CID/metadata.json" > vite-ui/.env
echo "VITE_CONTRACT_ADDRESS=$ADDRESS" >> vite-ui/.env

echo "🛠️ Step 5: Build Vite UI"
cd vite-ui
npm install
npm run build
cd ..

echo "🚚 Step 6: Commit and push to GitHub"
git add .
git commit -m "Auto-deploy $(date +%Y-%m-%d_%H:%M:%S)"
git push

echo "📡 All Done! GitHub Actions will deploy UI to GitHub Pages"
