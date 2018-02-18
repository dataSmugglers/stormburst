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
      from: "0x8cD3D592018Dbda0641Cb7CA965cD2f1221b62A3",
      port: 8545,
      network_id: 4,
      gas: 7000000
    }
  }
}
