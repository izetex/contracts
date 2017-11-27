var IZXToken = artifacts.require("IZXToken");
var Wallet = artifacts.require("Wallet");
var TokenSale = artifacts.require("TokenSale");

module.exports = function(deployer, network, accounts) {


    var token;

    deployer.then(function() {
        return IZXToken.deployed();
    }).then(function(instance) {
        token = instance;
        return Wallet.deployed();
    }).then(function(wallet) {

        var now = Math.floor(Date.now() / 1000);

        console.log("Deploying token sale with wallet: "+wallet.address+" and token: "+token.address);
        return deployer.deploy(TokenSale,
            now,                // uint _startFundingTime,
            now + 3600000000,   // uint _endFundingTime,
            25000000,           // uint _tokenCap,
            wallet.address,     // address _vaultAddress,
            token.address,      // address _tokenAddress,
            false,              // bool _transfersAllowed,
            400*100             // uint256 _exchangeRate
            );


    });


};