var IZXToken = artifacts.require("IZXToken");
var TokenSale = artifacts.require("TokenSale");
var TokenDriver = artifacts.require("TokenDriver");
var DriveToken = artifacts.require("DriveToken");
var Auction = artifacts.require("Auction");

function delay(t) {
    return new Promise(function(resolve) {
        setTimeout(resolve, t)
    });
}

contract('Auction', function(accounts) {

    var izx, erc721, auction, tokenId, tokenId2;

    it('should use IZX token, owned by users', function() {

        return IZXToken.deployed().then(function (instance) {
            izx = instance;
            return web3.eth.sendTransaction({from: accounts[1], to: izx.address, value: web3.toWei(2), gas: 120000});
        }).then(function () {
            return web3.eth.sendTransaction({from: accounts[2], to: izx.address, value: web3.toWei(2), gas: 120000});
        }).then(function () {
            return web3.eth.sendTransaction({from: accounts[3], to: izx.address, value: web3.toWei(2), gas: 120000});
        }).then(function () {
            return izx.balanceOf(accounts[1]);
        }).then(function (result) {
            assert.isTrue(result.toNumber() >= web3.toWei(1));
        });
    });

    it('should use ERC721 DRIVE token, owned by users', function() {

        return DriveToken.deployed().then(function (instance) {
            erc721 = instance;
            return erc721.mint(accounts[4], []);
        }).then(function (result) {
            tokenId = result.logs[0].args._tokenId.toNumber();
            assert.equal(tokenId, 1);
            return erc721.mint(accounts[5], []);
        }).then(function (result) {
            tokenId2 = result.logs[0].args._tokenId.toNumber();
            assert.equal(tokenId2, 2);
        });
    });

    it("should be created by token driver", function() {
        var sale, driver;
        return TokenDriver.deployed().then(function(instance) {
            driver = instance;
            return TokenSale.deployed();
        }).then(function(instance) {
            sale = instance;
            return sale.changeController(driver.address);
        }).then(function() {
            return izx.controller();
        }).then(function(result) {
            assert.equal(result.valueOf(), driver.address);
            return driver.createAuction(erc721.address, 10);
        }).then(function(result) {
            var log = result.logs[0];
            assert.equal(log.event, 'NewAuction');
            auction = Auction.at(log.args.auction);
        });
    });

    it("should use IZX & DRIVE tokens", function() {
        return auction.izx().then(function(instance) {
            assert.equal(instance, izx.address);
            return auction.erc721token();
        }).then(function(instance) {
            assert.equal(instance, erc721.address);
        });
    });

    it("should have host_share", function() {
        return auction.host_share().then(function(result) {
            assert.equal(result.toNumber(), 10);
            return auction.host();
        }).then(function(result) {
            assert.equal(result, accounts[0]);
        });
    });


    it("should sell ERC721 for sale price", function() {
        var balance1, balance2;
        return erc721.approve(auction.address, tokenId, {from: accounts[4]}).then(function(result) {
            return auction.sell( tokenId, web3.toWei(0.01), web3.toWei(0.5), 100, {from: accounts[4]});
        }).then(function(result) {
            var log = result.logs[0];

            assert.equal("Sale", log.event);
            assert.equal(accounts[4], log.args.owner);
            assert.equal(erc721.address, log.args.token);
            assert.equal(tokenId, log.args.tokenId.toNumber());

            return izx.balanceOf(accounts[1]);
        }).then(function(result) {
            balance1 = result.toNumber();
            return izx.balanceOf(accounts[2]);
        }).then(function(result) {
            balance2 = result.toNumber();
            return izx.approve(auction.address, web3.toWei(1.0), {from: accounts[1]});
        }).then(function(result) {
            return izx.approve(auction.address, web3.toWei(1.0), {from: accounts[2]});
        }).then(function(result) {
            return auction.bid( tokenId, web3.toWei(0.0009), {from: accounts[1]} );
        }).then( function(){
            assert.fail("Can not make bid less that min price!");
        }).catch(function(error) {
            return auction.bid( tokenId, web3.toWei(0.01), {from: accounts[1]} );
        }).then(function(result) {
            var log = result.logs[0];

            assert.equal("Bid", log.event);
            assert.equal(accounts[1], log.args.bidder);
            assert.equal(erc721.address, log.args.token);
            assert.equal(tokenId, log.args.tokenId.toNumber());
            assert.equal(web3.toWei(0.01), log.args.amount.toNumber());

            return izx.balanceOf(accounts[1]);
        }).then(function(result) {
            assert.equal(result.toNumber(), balance1 - web3.toWei(0.01));
            return izx.balanceOf(auction.address);
        }).then(function(result) {
            assert.equal(result.toNumber(), web3.toWei(0.01));
            return erc721.ownerOf(tokenId);
        }).then(function(result) {
            assert.equal(result, auction.address);
            return auction.bid( tokenId, web3.toWei(0.01), {from: accounts[2]} );
        }).then( function(){
            assert.fail("Can not make bid equal or less than winner!");
        }).catch(function(error) {
            return auction.bid( tokenId, web3.toWei(0.02), {from: accounts[2]} );
        }).then(function(result) {
            var log = result.logs[0];

            assert.equal("Bid", log.event);
            assert.equal(accounts[2], log.args.bidder);
            assert.equal(erc721.address, log.args.token);
            assert.equal(tokenId, log.args.tokenId.toNumber());
            assert.equal(web3.toWei(0.02), log.args.amount.toNumber());

            return izx.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(result.toNumber(), balance2 - web3.toWei(0.02));
            return izx.balanceOf(auction.address);
        }).then(function(result) {
            assert.equal(result.toNumber(), web3.toWei(0.02));
            return izx.balanceOf(accounts[1]);
        }).then(function(result) {
            assert.equal(result.toNumber(), balance1);
            return auction.bid( tokenId, web3.toWei(0.8), {from: accounts[1]} );
        }).then(function(result) {

            var log = result.logs[0];

            assert.equal("Sold", log.event);
            assert.equal(accounts[1], log.args.winner);
            assert.equal(erc721.address, log.args.token);
            assert.equal(tokenId, log.args.tokenId.toNumber());
            assert.equal(web3.toWei(0.5), log.args.amount.toNumber());

            log = result.logs[1];

            assert.equal("Bid", log.event);
            assert.equal(accounts[1], log.args.bidder);
            assert.equal(erc721.address, log.args.token);
            assert.equal(tokenId, log.args.tokenId.toNumber());
            assert.equal(web3.toWei(0.8), log.args.amount.toNumber());

            return izx.balanceOf(accounts[1]);
        }).then(function(result) {
            assert.equal(result.toNumber(), balance1 - web3.toWei(0.5));
            return erc721.ownerOf(tokenId);
        }).then(function(result) {
            assert.equal(result, accounts[1]);

        });
    });



});