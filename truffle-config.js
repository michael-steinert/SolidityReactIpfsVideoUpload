require("dotenv").config();
/* Truffle build-in Wallet */
const HDWalletProvider = require("@truffle/hdwallet-provider");
/* Getting the Mnemonic */
const mnemonic = require("./secrets.json").mnemonic;
const {ROPSTEN_NODE, BSC_TESTNET_NODE} = process.env;

module.exports = {
    // Configure Networks
    networks: {
        development: {
            host: "127.0.0.1", // Localhost
            port: 8545, // Standard Ethereum Port
            network_id: "*", // Any Network
        },
        ropsten: {
            provider: () => new HDWalletProvider(mnemonic, ROPSTEN_NODE),
            network_id: 3, // Ropsten's ID
            networkCheckTimeout: 1000000,
            gas: 5500000, // Ropsten has a lower Gas Limit than Mainnet
            confirmations: 2, // Number of Confirmations to wait between Deployments
            timeoutBlocks: 200, // Number of Blocks before a Deployment times out
            skipDryRun: true // Skip Dry Run before Migrations
        },
        bsctestnet: {
            provider: () => new HDWalletProvider(mnemonic, BSC_TESTNET_NODE),
            network_id: 97, // BSC Testnet's ID
            gas: 1000000, // Gas Limit
            confirmations: 10, // Number of Confirmations to wait between Deployments - 10 Confirmation because Block Time is fast
            timeoutBlocks: 100, // Number of Blocks before a Deployment times out
            skipDryRun: true // Skip Dry Run before Migrations
        }
    },
    // Configure Output of Build
    contracts_directory: "./src/contracts/",
    contracts_build_directory: "./src/abis/",
    // Configure Compilers
    compilers: {
        solc: {
            version: "0.8.10",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    }
};