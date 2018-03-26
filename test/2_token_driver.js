var IZXToken = artifacts.require("IZXToken");
var TokenSale = artifacts.require("TokenSale");
var TokenDriver = artifacts.require("TokenDriver");
var DriveToken = artifacts.require("DriveToken");

contract('TokenDriver', function(accounts) {

    it('should use IZX token, sold to users', function() {
        var token;
        return IZXToken.deployed().then(function (instance) {
            token = instance;
            return web3.eth.sendTransaction({from: accounts[1], to: token.address, value: web3.toWei(2), gas: 120000});
        }).then(function () {
            return token.balanceOf(accounts[1]);
        }).then(function (result) {
            assert.isTrue(result.toNumber() >= web3.toWei(1));
        });
    });

    it("should control IZX token", function() {
        var token, sale, driver;
        return IZXToken.deployed().then(function(instance) {
            token = instance;
            return TokenDriver.deployed();
        }).then(function(instance) {
            driver = instance;
            return TokenSale.deployed();
        }).then(function(instance) {
            sale = instance;
            return sale.changeController(driver.address);
        }).then(function() {
            return token.controller();
        }).then(function(result) {
            assert.equal(result.valueOf(), driver.address);
        });
    });

    it("should allow transfer tokens from owner to owner", function() {
        var token, balance, balance2;

        return IZXToken.deployed().then(function(instance) {
            token = instance;
            return token.balanceOf(accounts[1]);
        }).then(function(result) {
            balance = result.toNumber();
            assert.isTrue(balance >= web3.toWei(1));
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            balance2 =  result.toNumber();
            return token.transfer(accounts[2], web3.toWei(1), {from: accounts[1], gas: 150000});
        }).then(function() {
            return token.balanceOf(accounts[1]);
        }).then(function(result) {
            assert.equal(balance - parseInt(web3.toWei(1)), result.toNumber());
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(balance2 + parseInt(web3.toWei(1)), result.toNumber());
            assert.equal(web3.toWei(1), result.toNumber());
        });


    });

    it("should allow approve tokens from owner to owner", function() {
        var token, balance, balance2;

        return IZXToken.deployed().then(function(instance) {
            token = instance;
            return token.balanceOf(accounts[1]);
        }).then(function(result) {
            balance = result.toNumber();
            assert.isTrue(balance >= web3.toWei(1));
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            balance2 =  result.toNumber();
            return token.approve(accounts[1], web3.toWei(1), {from: accounts[2], gas: 150000});
        }).then(function() {
            return token.allowance(accounts[2], accounts[1]);
        }).then(function(result) {
            assert.equal(web3.toWei(1), result.toNumber());
            return token.transferFrom(accounts[2], accounts[1], web3.toWei(1), {from: accounts[1], gas: 150000});
        }).then(function() {
            return token.balanceOf(accounts[1]);
        }).then(function(result) {
            assert.equal(balance + parseInt(web3.toWei(1)), result.toNumber());
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(balance2 - parseInt(web3.toWei(1)), result.toNumber());
        });


    });


    it("should not allow transfer tokens to contract", function(done) {
        var token, controller;

        IZXToken.deployed().then(function(instance) {
            token = instance;
            return token.transfer(token.address, web3.toWei(0.1), {from: accounts[1], gas: 150000});
        }).then( function(){
            assert.fail("Exception expected");
        }).catch(function(error) {
            done();
        });


    });



    it("should not allow approve tokens to contract", function(done) {
        var token, controller;

        IZXToken.deployed().then(function(instance) {
            token = instance;
            return token.approve(token.address, web3.toWei(0.1), {from: accounts[1], gas: 150000});
        }).then( function(){
            assert.fail("Exception expected");
        }).catch(function(error) {
            done();
        });


    });


    it("should allow create auction and allow/transfer tokens", function() {
        var token, erc721, auction;

        return IZXToken.deployed().then(function(instance) {
            token = instance;
            return DriveToken.deployed();
        }).then(function(instance) {
            erc721 = instance;
            return token.controller();
        }).then(function(instance) {
            return TokenDriver.at(instance).createAuction(erc721.address, 0);
        }).then(function(result) {
            var log = result.logs[0];
            assert.equal(log.event, 'NewAuction');
            auction = log.args.auction;
            return token.approve(auction, web3.toWei(0.1), {from: accounts[1], gas: 150000});
        }).then( function(){
            return token.transfer(auction, web3.toWei(0.1), {from: accounts[1], gas: 150000});
        }).then( function(){
            return token.balanceOf(auction);
        }).then( function(result){
            assert.equal(web3.toWei(0.1), result.toNumber());
        });


    });


    it("should allow create campaign and allow/transfer tokens", function() {
        var token, erc721, campaign;

        return IZXToken.deployed().then(function(instance) {
            token = instance;
            return DriveToken.deployed();
        }).then(function(instance) {
            erc721 = instance;
            return token.controller();
        }).then(function(instance) {
            return TokenDriver.at(instance).createCampaign(erc721.address, 100, 1, 0);
        }).then(function(result) {
            var log = result.logs[0];
            assert.equal(log.event, 'NewCampaign');
            campaign = log.args.campaign;
            return token.approve(campaign, web3.toWei(0.1), {from: accounts[1], gas: 150000});
        }).then( function(){
            return token.transfer(campaign, web3.toWei(0.1), {from: accounts[1], gas: 150000});
        }).then( function(){
            return token.balanceOf(campaign);
        }).then( function(result){
            assert.equal(web3.toWei(0.1), result.toNumber());
        });


    });
});
