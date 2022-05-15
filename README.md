# Chainlink Truffle Box

<br/>
<p align="center">
<a href="https://chain.link" target="_blank">
<img src="https://raw.githubusercontent.com/smartcontractkit/box/master/box-img-lg.png" width="225" alt="Chainlink Truffle logo">
</a>
</p>
<br/>

## Requirements

There are a few technical requirements before we start. 
To use `Truffle boxes`, you need to have installed in your computer:

- Git
- a POSIX compliant shell (use gitBash on Windows OS)
- Node.js and NPM
- a code editor

**Truffle framework**

Once you have those requirements installed, you only need one command to install `Truffle`.
It is better to do it globally:

```shell
npm install -g truffle
```

## Installation

1. Setup repo

```bash
mkdir MyChainlinkProject
cd MyChainlinkProject/
```

2. Unbox

This also takes care of installing the necessary dependencies and it can take some time.

```bash
truffle unbox smartcontractkit/box
```

## Requirements to deploy on a network

Before you deploy on a network, you need:

- A wallet with enought ETH to deploy
- An account at [infura](https://infura.io/)

1. Create a wallet

The easy way to setup an account is using a web3 wallet injected in the browser
- [Metamask](https://metamask.io/)

Copy your mnemonic (seed phrase or backup words)

2. Create an account at [infura](https://infura.io/)
   - Create a project, selecting `Ethereum network`.
   - Copy the project ID

### Create .env

For deploying to the kovan network, Truffle will use `truffle-hdwallet-provider` for your mnemonic and an RPC URL, which uses your infura key.

Make a copy of `.env.example` and named `.env`, located in the folder project.

Update your **MNEMONIC** and **RPC_URL** in **.env**

Save `.env` file.

> :warning: when pushing your code to Github, make sure that your **MNEMONIC** and **INFURA_KEY** are stored in a **.env** file and it is also in your **.gitignore**

## Deploy on Kovan - Ethereum testnet network

```bash
npm run migrate:kovan
```

You can also run:

```bash
truffle migrate --network kovan --reset
```
If you want to use truffle commands.

## Test on Kovan

```bash
npm run test:kovan
```

Or using truffle commands:

```bash
truffle test --network kovan
```

## Helper Script

There are a helper script provided with this box in the scripts directory:

- `get-latest-price.js`

It can be used by calling them from `npx truffle exec`, for example:

```bash
npx truffle exec scripts/get-latest-price.js --network kovan
```

The CLI will output something similar to the following:

```
Using network 'kovan'.

205136000000
Truffle v5.5.13 (core: 5.5.13)
Node v16.13.1
```

> You must deploy the project before use the script.
