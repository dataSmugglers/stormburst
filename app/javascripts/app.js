// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";
import "../assets/head.png";

// Import libraries we need.
import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import stormburst_artifacts from '../../build/contracts/StormBurst.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var StormBurst = contract(stormburst_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.


window.App = {
  submissionsByTag : {},
  tags: [],
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    StormBurst.setProvider(web3.currentProvider);

    self.refreshSubmissions();
  },

  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },

  refreshSubmissions: function() {
    var self = this;
    var tagCount;
    var sb;
    StormBurst.deployed().then(function(instance) {
      sb = instance;
      return sb.getTagCount.call().then(function(count) {return count});
    }).then(function(value) {
      tagCount = value
      for(var idx = 0; idx < tagCount; idx++ ) {
        var tagName = sb.getTag.call(idx).then(name => {
          self.tags.push(name);
        }).catch(function(e) {
          console.log(e);
          self.setStatus("Error getting tag; see log.");
        });
      }
      self.tags.forEach(tag => {
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
      });
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting tag count; see log.");
    });
  },

/*
	Please peer review this portion, I've just replaced amount and receiver with
	title and tag, this probably wasn't intended.-Bob
	
	
*/
  sendMagnet: () => {
    var self = this;

    var title = parseInt(document.getElementById("titleSearchInput").value);
    var tag = document.getElementById("tagInput").value;

    this.setStatus("Initiating transaction... (please wait)");

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.sendCoin(title, tag, {from: account});
    }).then(function() {
      self.setStatus("Transaction complete!");
      self.refreshBalance();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error sending coin; see log.");
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
