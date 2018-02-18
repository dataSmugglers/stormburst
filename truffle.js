// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      from: "0xBE33A72CB6b71Ed43DEF9f1085199e88046DDcfB",
      network_id: 4,
      gas: 4612388
    }
  }
}
