// var DragonTokenInterface = artifacts.require("/Users/chejianer/Desktop/difeng/Solidity/DragonToken/contracts/DragonTokenInterface.sol");
var DragonToken = artifacts.require("/Users/chejianer/Desktop/difeng/Solidity/DragonToken/contracts/DragonToken.sol");

module.exports = function(deployer) {
  // deployer.deploy(DragonTokenInterface);
  // deployer.link(DragonTokenInterface, DragonToken);
  deployer.deploy(DragonToken);
};
