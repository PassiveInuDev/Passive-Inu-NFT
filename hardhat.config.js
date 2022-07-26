require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");


const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const PROJECT_ID = process.env.PROJECT_ID
const PK = process.env.PK

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    }
  },
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
    currency: 'USD',
    token: 'ETH',
    coinmarketcap: process.env.CMCAPI, //'00a4f49a-2c1b-4315-8209-0599ae260257',
    gasPriceApi: 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice',
    gasPrice: 77
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      url: 'http://localhost:8545'
    } // See options below
  },
  defaultNetwork: "hardhat",
  // defaultNetwork: "testnet",
  // etherscan: {
  //   apiKey: ETHERSCAN_API_KEY,
  // },
  // networks: {
  //   hardhat: { chainId: 338 },
  //   rinkeby: {
  //     url: `https://cronos-testnet-3.crypto.org:8545`,
  //     accounts: [`0x${PK}`],
  //   }
  // }

  // defaultNetwork: "mainnet",
  // etherscan: {
  //   apiKey: ETHERSCAN_API_KEY,
  // },
  // networks: {
  //   hardhat: { chainId: 25 },
  //   mainnet: {
  //     url: `https://evm-cronos.crypto.org/`,
  //     accounts: [`0x${PK}`],
  //   }
  // }  
};
