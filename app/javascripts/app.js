// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import stormburst_artifacts from '../../build/contracts/StormBurst.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var StormBurst = contract(stormburst_artifacts);
var accounts;
// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.


window.App = {
  account: "", 
  submissionsByTag : {},
  tags: [],
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    StormBurst.setProvider(web3.currentProvider);
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      self.account = accounts[0];

      self.refreshSubmissions();
    });
  },

  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },

  refreshSubmissions: function() {
    var self = this;

    self.tags = [];
    self.submissionsByTag = {};

    var tagCount;
    var sb;
    StormBurst.deployed().then(function(instance) {
      sb = instance;
      return sb.getTagCount.call().then(function(count) {return count});
    }).then(function(value) {
      tagCount = value
      for(var idx = 0; idx < tagCount; idx++ ) {
        var tagName = sb.getTag.call(idx).then(tag => {
          self.tags.push(tag);
          self.submissionsByTag[tag] = [];
          sb.submissionsByTagCount.call(tag).then(count => {
            for(idx = 0; idx < count; idx++ ) {
              var submission = sb.submissionByTag.call(tag, idx).then(sub => {
                self.submissionsByTag[tag].push(sub);
              }).catch(function(e) {
                console.log(e);
                self.setStatus("Error getting submission; see log.");
              });
            }
          }).catch(function(e) {
            console.log(e);
            self.setStatus("Error getting submission count for tag; see log.");
          });
        }).catch(function(e) {
          console.log(e);
          self.setStatus("Error getting tag; see log.");
        });
      }
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting tag count; see log.");
    });
  },

  sendMagnet: function(mirrorLink, title, tag) {
    var self = this;

    this.setStatus("Initiating transaction... (please wait)");

    var sb;
    StormBurst.deployed().then(function(instance) {
      sb = instance;
      console.log(mirrorLink, title, tag);
      return sb.createSubmission(mirrorLink, title, tag, {from: self.account}).then(function() {
        self.refreshSubmissions();
      });
    }).then(function() {
      self.setStatus("Transaction complete!"); 
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error sending Magnet Link; see log.");
    });
  },
	
	/*
		The function below listens for the Go button, in the index.html.
	*/
	goSearch: () => {
		console.log("Go button was clicked.")
	}
};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:7545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
  }

  App.start();
});
