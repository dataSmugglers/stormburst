var stringUtils = artifacts.require("./StringUtils.sol");
var StormBurst = artifacts.require("./StormBurst.sol");

module.exports = function(deployer) {
  deployer.deploy(stringUtils);
  deployer.link(stringUtils, StormBurst);
  deployer.deploy(StormBurst);
};
