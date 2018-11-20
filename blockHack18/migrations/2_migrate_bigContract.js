var AllEscrows = artifacts.require("AllEscrows");
var Token = artifacts.require("DummyToken");



module.exports = function(deployer) {
    deployer.deploy(AllEscrows);
    deployer.deploy(Token);

};
  