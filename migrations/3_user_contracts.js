// This file was auto-generated by the Witnet compiler, any manual changes will be overwritten except
// each contracts' constructor arguments (you can freely edit those and the compiler will respect them).
const Witnet = artifacts.require("Witnet")
const WitnetBridgeInterface = artifacts.require("WitnetBridgeInterface")
const TokenPriceContest = artifacts.require("TokenPriceContest")
module.exports = function (deployer) {
  deployer.link(Witnet, [TokenPriceContest])
  deployer.deploy(TokenPriceContest, 0, 0, WitnetBridgeInterface.address, 1, 1)
}
