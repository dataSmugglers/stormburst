# Stormburst

The *immutable* and decentralized torrent network on the Ethereum blockchain.

![logo](https://i.imgur.com/aIIdgnk.png)

>"A farm of your own is better, even if small. Everyone's someone at home." - Hávamál st. 46

## How It Works

* Searches are free.
* If you wish to post a magnet link to the network, simply pay via MetaMask.
* Posters include the link, a title for the post, and a tag (e.g. #linux)
* You can search by tag, or simply choose to browse.

## Getting Started

These instructions allow you to set up your own torrent community *dApp*, using ethereums smart contracts. You can choose to simply clone this repository and run your own proxy version of Stormburst. You may also choose to customize it to you liking and redeploy (since submissions are tag based it currently works great for targeted communities)

### Prerequisites / Dependencies

You will need, nodejs 5+, Truffle, ganache-cli, and  MetaMask. [Truffle](https://github.com/trufflesuite/truffle) is our build/test/deploy tool (this what nodejs is required for). [Ganache](https://github.com/trufflesuite/ganache-cli) is responsible for setting up a ethereum test network. We can issue ourselves test coins and run test transactions. Lastly [MetaMask](https://metamask.io/) will help us to integrate our wallet into our *dApp*.

*(On Ubuntu)*
First install node:

```bash
sudo apt install nodejs
```

Install your node modules:
```bash
sudo npm install -g truffle ganache-cli
```

Lastly install MetaMask in your browser of choice. It is currently available for Firefox, Chrome, Opera, and Brave.

### Installing / Deploying the dApp

There are two portions to the installation. Deploying your contract, then setting up your frontend. If you are making custom changes it is recommended that you test out any modifications before deploying to the live ethereum network.

First clone the project and compile
```bash
git clone https://github.com/dataSmugglers/stormburst.git
cd stormburst
truffle compile
```

Start up Ganache
```bash
ganache-cli
```

## Running the tests

Next we can perform our migration to the test network
```bash
truffle migrate --network development
```

Run:
```bash
truffle test
```

You should now be able to visit the site at http://localhost:8080

(Be sure to point MetaMask at the ganache test network.)

## Built With

❤️ @ EthDenver Hackathon 2018 🦄

## Contributing

Feel free to submit a PR and we'll review it! :)

## Authors

* **Sal Camara** - Initial work - [sal2993](https://github.com/sal2993)
* **hexphase** - Initial work - [hexphase](https://github.com/hexphase)
* **Dong Lee** - Inital work - [dlee67](https://github.com/dlee67)
* **Luke Smith** - Initial work - [lsmith-zenoscave](https://github.com/lsmith-zenoscave)

## License / Disclaimer

This project is licensed under the 2-clause BSD license. (See LICENSE.md)

> This project has been developed for academic purposes only.  We do not condone the sharing of copyrighted materials. Use at your own risk; alpha stage software. We will not be held responsible for the misuse of the software.
