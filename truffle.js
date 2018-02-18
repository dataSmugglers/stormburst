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
      from: "0x8cd3d592018dbda0641cb7ca965cd2f1221b62a3",
      network_id: 4,
      gas: 4612388
    }
  }
}
