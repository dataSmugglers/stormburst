# Stormburst

The immutable and decentralized torrent network on the Ethereum blockchain.

![logo](https://i.imgur.com/aIIdgnk.png)

## Getting Started

These instructions allow you to set up your own torrent community dApp, using ethereums smart contracts. You can choose to simply clone this repository and run your own proxy version of Stormburst. You may also choose to customize it to you liking and redeploy (since submissions are tag based it currently works great for targeted communities)

### Prerequisites / Dependencies

You will need, nodejs 5+, Truffle, ganache-cli, and  MetaMask. [Truffle](https://github.com/trufflesuite/truffle) is our build/test/deploy tool (this what nodejs is required for). [Ganache](https://github.com/trufflesuite/ganache-cli) is responsible for setting up a ethereum test network. We can issue ourselves test coins and run test transactions. Lastly [MetaMask](https://metamask.io/) will help us to integrate our wallet into our dApp.

(On Ubuntu)
First install node:

```
sudo apt install nodejs

```

Install your node modules:
```
sudo npm install -g truffle ganache-cli
```

Lastly install MetaMask in your browser of choice. It is currently available for Firefox, Chrome, and Brave.

### Installing / Deploying the dApp

There are two portions to the installation. Deploying your contract, then setting up your frontend. If you are making custom changes it is recommended that you test out any modifications before deploying to the live ethereum network.

First clone the project and compile
```
git clone https://github.com/dataSmugglers/stormburst.git
cd stormburst
truffle compile
```

## Running the tests

Run:
```
truffle test
```

Next we can perform our migration
```
truffle migrate network --live
```

## Built With

❤️ @ EthDenver Hackathon 2018 🦄

## Contributing

Feel free to submit a PR and we'll review it! :)

## Authors

* **Sal Camara** - *Initial work* - [sal2993](https://github.com/sal2993)
* **hexphase** - *Initial work* - [hexphase](https://github.com/hexphase)
* **Dong Lee** - *Inital work* - [dlee67](https://github.com/dlee67)
* **Luke Smith** - *Initial work* - [lsmith-zenoscave](https://github.com/lsmith-zenoscave)

## License

This project is licensed under the 2-clause BSD license License.

## Disclaimer

* This project has been developed for academic purposes only.
* We do not condone the sharing of copyrighted materials.
* There is not warranty of any kind included with this software - use at your own risk (alpha level software)
* We will not be held responsible for the misuse of the software.
