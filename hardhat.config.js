/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-ethers");
require("dotenv").config(); 
module.exports = {
  solidity: "0.8.27",
  
  paths:{
    artifacts: './src/artifacts',
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",  // Local development network
    },
    polygonAmoy: {
      url: process.env.POLYGON_AMOY_RPC_URL, // Use the RPC URL from .env
      accounts: [process.env.PRIVATE_KEY],      // Private key for deployment
    },


},
};

