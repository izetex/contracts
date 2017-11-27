var IZXToken = artifacts.require("IZXToken");
var TokenSale = artifacts.require("TokenSale");

module.exports = function(deployer) {

    var token;

    deployer.then(function() {
        return IZXToken.deployed();
    }).then(function(instance) {
        token = instance;
        return TokenSale.deployed();
    }).then(function(token_sale) {

        console.log("Setting token: "+token.address+" controller to: "+token_sale.address);

        token.changeController(token_sale.address);

    });

};
