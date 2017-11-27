var Wallet = artifacts.require("Wallet");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(Wallet,
        [
            accounts[1],
            accounts[2],
            accounts[3],
            accounts[4]
        ], 3, 0);
};