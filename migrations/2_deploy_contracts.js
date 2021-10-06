const Words = artifacts.require("Guestbook");
module.exports = function(deployer) {
  deployer.deploy(Words);
};
