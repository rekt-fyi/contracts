/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */


const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()  // Store environment-specific variable from '.env' to process.env

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  plugins: [ "truffle-security" ],
  compilers: {
    solc: {
      version: "0.5.9",
      settings: {
        evmVersion: "byzantium"
      }
    }
  },
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
        // testnets
    // properties
    // network_id: identifier for network based on ethereum blockchain. Find out more at https://github.com/ethereumbook/ethereumbook/issues/110
    // gas: gas limit
    // gasPrice: gas price in gwei
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 3,
      gas: 3000000,
      gasPrice: 20000000000
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 42,
      gas: 6000000,
      gasPrice: 20000000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 4,
      gas: 3000000,
      gasPrice: 20000000000
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 1,
      gas: 6000000,
      gasPrice: 8000000000
    }
  }
};
