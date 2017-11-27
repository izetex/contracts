var IZXToken = artifacts.require("IZXToken");
var Wallet = artifacts.require("Wallet");
var TokenSale = artifacts.require("TokenSale");

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

contract('TokenSale', function(accounts) {

    it("should have set exchange rate", function() {
        return TokenSale.deployed().then(function(instance) {
            return instance.exchangeRate.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), 400*100);
        });
    });


    it("should have set wallet", function() {
        var wallet;
        return Wallet.deployed().then(function(instance) {
            wallet = instance;
            return TokenSale.deployed();
        }).then(function(instance) {
            return instance.vaultAddress.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), wallet.address);
        });
    });


    it("should have set token", function() {
        var token;
        return IZXToken.deployed().then(function(instance) {
            token = instance;
            return TokenSale.deployed();
        }).then(function(instance) {
            return instance.tokenContract.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), token.address);
        });
    });


    it("should set controller for token", function() {
        var sale;
        return TokenSale.deployed().then(function(instance) {
            sale = instance;
            return IZXToken.deployed();
        }).then(function(instance) {
            return instance.controller.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), sale.address);
        });
    });

});

