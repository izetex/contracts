var FreeGameToken = artifacts.require("FreeGameToken");
var ProxyController = artifacts.require("ProxyController");
var GameController = artifacts.require("GameController");
var FreeGame = artifacts.require("FreeGame");


contract('FreeGameToken', function(accounts) {


    it("should have 18 digits", function() {
        return FreeGameToken.deployed().then(function(instance) {
            return instance.decimals.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), 18);
        });
    });

    it("should have 0 supply", function() {
        return FreeGameToken.deployed().then(function(instance) {
            return instance.totalSupply.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), 0);
        });
    });

    it("should have symbol", function() {
        return FreeGameToken.deployed().then(function(instance) {
            return instance.symbol.call();
        }).then(function(result) {
            assert.equal(result, 'FGT');
        });
    });

    it("should have controller", function() {
        return FreeGameToken.deployed().then(function(instance) {
            return instance.controller();
        }).then(function(result) {
            assert.isTrue(!!result);
        });
    });
});


contract('GameController', function(accounts) {


    it("should generate tokens to players", function() {
        var token, controller;

        return FreeGameToken.deployed().then(function(instance) {
            token = instance;
            return token.controller();
        }).then(function(result) {
            controller = ProxyController.at(result);
            return controller.generateTokens(accounts[1], web3.toWei(5), {from: accounts[0], gas: 150000});
        }).then(function() {
            return controller.generateTokens(accounts[2], web3.toWei(10), {from: accounts[0], gas: 150000});
        }).then(function() {
            return token.totalSupply();
        }).then(function(result) {
            assert.equal(web3.toWei(15), result.toNumber());
            return token.balanceOf(accounts[1]);
        }).then(function(result) {
            assert.equal(web3.toWei(5), result.toNumber());
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(web3.toWei(10), result.toNumber());
        });
    });

});
