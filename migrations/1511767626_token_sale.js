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

        return deployer.deploy(TokenSale,
            now,                // uint _startFundingTime,
            now + 3600000000,   // uint _endFundingTime,
            web3.toWei(25000000),           // uint _tokenCap,
            wallet.address,     // address _vaultAddress,
            token.address,      // address _tokenAddress,
            false,              // bool _transfersAllowed,
            400 * 100             // uint256 _exchangeRate
        );

    }).then(function() {
            return IZXToken.deployed();
    }).then(function(instance) {
            token = instance;
            return TokenSale.deployed();
    }).then(function(token_sale) {
           // console.log("Setting token: "+token.address+" controller to: "+token_sale.address);
            token.changeController(token_sale.address);
    });


};