var IZXToken = artifacts.require("IZXToken");
var TokenDriver = artifacts.require("TokenDriver");
var TokenSale = artifacts.require("TokenSale");

module.exports = function(deployer, network, accounts) {


    var token, sale, driver;

    deployer.then(function() {
        return IZXToken.deployed();
    }).then(function(instance) {
        token = instance;

        return deployer.deploy(TokenDriver, token.address);

    }).then(function() {
        return TokenSale.deployed();
    }).then(function(instance) {
        sale = instance;
        return TokenDriver.deployed();
    }).then(function(instance) {
        driver = instance;
        return sale.changeController(driver.address);
    }).then(function() {
        return token.controller();
    }).then(function(controller) {
        console.log("Token Driver " + driver.address + " for IZX token: "+token.address+
            " with controller: "+controller);
    });


};