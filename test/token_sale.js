var IZXToken = artifacts.require("IZXToken");
var Wallet = artifacts.require("Wallet");

contract('IZXToken', function(accounts) {


    it("should have 18 digits", function() {
        return IZXToken.deployed().then(function(instance) {
            return instance.decimals.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), 18);
        });
    });

    it("should have 1 supply", function() {
        return IZXToken.deployed().then(function(instance) {
            return instance.totalSupply.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), 1);
        });
    });

    it("should have IZX symbol", function() {
        return IZXToken.deployed().then(function(instance) {
            return instance.symbol.call();
        }).then(function(result) {
            assert.equal(result, 'IZX');
        });
    });

});


contract('Wallet', function(accounts) {


    it("should have 5 owners", function() {
        return Wallet.deployed().then(function(instance) {
            return instance.m_numOwners.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), 5);
        });
    });

    it("should require 3 owners", function() {
        return Wallet.deployed().then(function(instance) {
            return instance.m_required.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), 3);
        });
    });

    it("should have 0 balance", function() {
        return Wallet.deployed().then(function(instance) {
            return web3.eth.getBalance(instance.address);
        }).then(function(result) {
            assert.equal(result.valueOf(), 0);
        });
    });

});
