const Stormbursts = artifacts.require("./StormBurst.sol")

module.exports = function(deployer) {
	deployer.deploy(Stormbursts);
};
