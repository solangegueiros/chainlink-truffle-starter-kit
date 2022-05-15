const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

const mnemonic = process.env.MNEMONIC
const infuraKey = process.env.INFURA_KEY

module.exports = {
  networks: {
    develop: {
      port: 8545,
      network_id: "1337",
    },
    binance_testnet: {
      provider: () => new HDWalletProvider(mnemonic,'https://data-seed-prebsc-1-s1.binance.org:8545'),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider({
        mnemonic: { phrase: mnemonic },
        providerOrUrl: `https://rinkeby.infura.io/v3/` + infuraKey
      }),
      network_id: 4,
      skipDryRun: true
    },     
    kovan: {
      provider: () => new HDWalletProvider({
        mnemonic: { phrase: mnemonic },
        providerOrUrl: `https://kovan.infura.io/v3/` + infuraKey
      }),
      network_id: 42,
      skipDryRun: true
    },
  },
  
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
}
