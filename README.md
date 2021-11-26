# Ethereum IPFS Solidity Web3.js ReactJS

* Fully decentralized Application published on IPFS

## Interaction with decentralized Applications

![Interaction with decentralized Applications](https://user-images.githubusercontent.com/29623199/143569712-e22280b5-d2ed-4073-aa47-63a075f26c66.png)

* Create, compile, deploy and add a Smart Contract to a Blockchain
* Interaction with Smart Contract:

1) Connect with a Blockchain via Web3
1) Run a decentralized Application (dApp) and upload a Video
1) Publish a Video through InterPlanetary File System (IPFS)
1) Get Hash from published Video
1) Adding the Video Hash to a Smart Contract through a Transaction
1) User of Smart Contract improve the Transaction
1) Adding the Video Hash and User Address to the Smart Contract

## Commands

| Command | Description |
| --- | --- |
| Truffle | |
| truffle migrate | Running the Migrate Script and deploy the Smart Contract to the Blockchain |
| truffle migrate | Running the Migrate Script and deploy a new Smart Contract to the Blockchain |
| truffle console | Running a JavaScript Runtime Environment that can interact with the Blockchain |
| truffle test | Running Test to check the Smart Contract |
| truffle networks | Listing all Addresses of deployed Smart Contract |
| Truffle Console | |
| dVideo = await DVideo.deployed() | Getting the deployed Smart Contract as JavaScript Version |
| dVideo | Printing out the deployed Smart Contract as JavaScript Version |
| name = await dVideo.name() | Getting the public State Variable 'name' from the deployed Smart Contract |
| name | Printing out the public State Variable |

## Dependencies

* Node.js: It allows to install all Dependencies and run the Client-side Application
* Truffle Framework: A Framework for Creating Ethereum Smart Contracts. It allows creating, testing and deploying Smart Contracts on a Blockchain
* Ganache: It provides a local Blockchain for Testing Purpose
* MetaMask: A Browser Extension to connect with the Blockchain. It contains the Wallet for Ethereum
* Web3.js Connect the Browser with MetaMask Extension to the Blockchain based Website

## How to run decentralized Video Platform

1) Generate a Mnemonic Seed Phrase (and then paste into secrets.json)

```shell
npx mnemonics
```

2) Configure the Truffle Console for BSC Testnet (truffle-config.js)

```shell
truffle console --network bsctestnet
```

3) Compile the Smart Contracts

```shell
compile
```

4) Get a List of Accounts

```shell
await web3.eth.getAccounts()
```

5) Fund the Deployment Account under: https://testnet.binance.org/faucet-smart

6) Get the Balance of the Deployment Account

```shell
await web3.eth.getBalance("0xBA0a8b23F719390FB15F037660fdf7B4c8b1c6dC")
```

7) Migrate the Smart Contracts in the configured (--network bsctestnet) Console

```shell
migrate
```