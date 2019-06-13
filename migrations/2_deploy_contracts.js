//var Medi = artifacts.require("Medianizer");
//var SAI = artifacts.require("SAI");
//var DAI = artifacts.require("DAI");


var RektFyi = artifacts.require("RektFyi");
var medianizerKovan = "0x9FfFE440258B79c5d6604001674A4722FfC0f7Bc";
var saiKovan = "0xC4375B7De8af5a38a93548eb8453a498222C4fF2";
var medianizerMain = "0x729D19f657BD0614b4985Cf1D82531c67569197B";
var saiMain = "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359";


module.exports = function(deployer) {
  //deployer.deploy(Medi);
  //deployer.deploy(SAI);
  //deployer.deploy(DAI);
  //deployer.deploy(RektFyi, medianizerAddress, saiAddress);
  deployer.deploy(RektFyi, medianizerMain, saiMain);
};
