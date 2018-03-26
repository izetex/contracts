var IZXToken = artifacts.require("IZXToken");
var TokenSale = artifacts.require("TokenSale");
var TokenDriver = artifacts.require("TokenDriver");
var DriveToken = artifacts.require("DriveToken");
var Campaign = artifacts.require("Campaign");

function delay(t) {
    return new Promise(function(resolve) {
        setTimeout(resolve, t)
    });
}

contract('Campaign', function(accounts) {

    var izx, erc721, campaign, tokenId, tokenId2;
    var advertiser = accounts[3];

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
            return driver.createCampaign(erc721.address, 6, web3.toWei(0.1), 10);
        }).then(function(result) {
            var log = result.logs[0];
            assert.equal(log.event, 'NewCampaign');
            campaign = Campaign.at(log.args.campaign);
        });
    });

    it("should use IZX & DRIVE tokens", function() {
        return campaign.izx().then(function(instance) {
            assert.equal(instance, izx.address);
            return campaign.erc721token();
        }).then(function(instance) {
            assert.equal(instance, erc721.address);
        });
    });

    it("should calculate payouts", function() {
        return campaign.token_price().then(function(result) {
            assert.equal(result.toNumber(), web3.toWei(0.1));
            return campaign.winner_payout();
        }).then(function(result) {
            assert.equal(result.toNumber(), web3.toWei(0.09));
            return campaign.host_payout();
        }).then(function(result) {
            assert.equal(result.toNumber(), web3.toWei(0.01));
            return campaign.lifetime();
        }).then(function(result) {
            assert.equal(result.toNumber(), 6);
            return campaign.host();
        }).then(function(result) {
            assert.equal(result, accounts[0]);
        });
    });

    it("should accept approval from advertiser", function() {

        return izx.approve( campaign.address, web3.toWei(0.3), {from: advertiser}).then(function(result) {
            assert.equal('Approval', result.logs[0].event);
        });
    });


    it("should convert player", function() {
        var balance;
        return erc721.approve( campaign.address, tokenId, {from: accounts[4]}).then(function(result) {
            return izx.balanceOf(advertiser);
        }).then(function(result) {
            balance = result.toNumber();
            assert.isTrue(balance>0);
            return campaign.claim(tokenId, advertiser, {from: accounts[4]});
        }).then(function(result) {
            var log = result.logs[0];

            assert.equal('Claimed', log.event);
            assert.equal(accounts[4], log.args.winner);
            assert.equal(advertiser, log.args.advertiser);
            assert.equal(tokenId, log.args.tokenId.toNumber());

            return erc721.ownerOf(tokenId);
        }).then(function(result) {
            assert.equal(campaign.address, result);
            return izx.balanceOf(advertiser);
        }).then(function(result) {
            assert.equal(balance - web3.toWei(0.1).toNumber(), result.toNumber());
            return izx.balanceOf(campaign.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0.1).toNumber(), result.toNumber());
            return campaign.convert(tokenId, {from: accounts[4]} );
        }).then( function(){
            assert.fail("Do not allow player to convert himself!");
        }).catch(function(error) {
           return campaign.convert(tokenId, {from: advertiser, gas: 250000} );
        }).then(function(result) {
            var log = result.logs[0];

            assert.equal('Converted', log.event);
            assert.equal(accounts[4], log.args.winner);
            assert.equal(advertiser, log.args.advertiser);
            assert.equal(tokenId, log.args.tokenId.toNumber());

            return izx.balanceOf(advertiser);
        }).then(function(result) {
            assert.equal(balance - web3.toWei(0.1), result.toNumber());
            return izx.balanceOf(campaign.address);
        }).then(function(result) {
            assert.equal(0, result.toNumber());
            return izx.balanceOf(accounts[4]);
        }).then(function(result) {
            assert.equal(web3.toWei(0.09), result.toNumber());
            return izx.balanceOf(accounts[0]);
        }).then(function(result) {
            assert.equal(web3.toWei(0.01), result.toNumber());
            return erc721.ownerOf(tokenId);
        }).then(function(result) {
            assert.equal(advertiser, result);
        });
    });

    it("should be reclaimed by player", function() {
        var balance;
        return erc721.approve( campaign.address, tokenId2, {from: accounts[5]}).then(function(result) {
            return izx.balanceOf(advertiser);
        }).then(function(result) {
            balance = result.toNumber();
            assert.isTrue(balance>0);
            return campaign.claim(tokenId2, advertiser, {from: accounts[5]});
        }).then(function(result) {
            var log = result.logs[0];

            assert.equal('Claimed', log.event);
            assert.equal(accounts[5], log.args.winner);
            assert.equal(advertiser, log.args.advertiser);
            assert.equal(tokenId2, log.args.tokenId.toNumber());

            return erc721.ownerOf(tokenId2);
        }).then(function(result) {
            assert.equal(campaign.address, result);
            return izx.balanceOf(advertiser);
        }).then(function(result) {
            assert.equal(balance - web3.toWei(0.1), result.toNumber());
            return izx.balanceOf(campaign.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0.1), result.toNumber());
            return campaign.reclaim(tokenId2, {from: accounts[5]} );
        }).then(function(result) {
            var log = result.logs[0];

            assert.equal('Reclaimed', log.event);
            assert.equal(accounts[5], log.args.winner);
            assert.equal(advertiser, log.args.advertiser);
            assert.equal(tokenId2, log.args.tokenId.toNumber());

            return izx.balanceOf(advertiser);
        }).then(function(result) {
            assert.equal(balance, result.toNumber());
            return erc721.ownerOf(tokenId2);
        }).then(function(result) {
            assert.equal(accounts[5], result);
        });
    });

    it("should be reclaimed after expiration", function() {
        var balance;
        return erc721.approve( campaign.address, tokenId2, {from: accounts[5]}).then(function(result) {
            return izx.balanceOf(advertiser);
        }).then(function(result) {
            balance = result.toNumber();
            assert.isTrue(balance>0);
            return campaign.claim(tokenId2, advertiser, {from: accounts[5]});
        }).then(function(result) {
            var log = result.logs[0];

            assert.equal('Claimed', log.event);
            assert.equal(accounts[5], log.args.winner);
            assert.equal(advertiser, log.args.advertiser);
            assert.equal(tokenId2, log.args.tokenId.toNumber());

            return erc721.ownerOf(tokenId2);
        }).then(function(result) {
            assert.equal(campaign.address, result);
            return izx.balanceOf(advertiser);
        }).then(function(result) {
            assert.equal(balance - web3.toWei(0.1), result.toNumber());
            return izx.balanceOf(campaign.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0.1), result.toNumber());
            return campaign.reclaim(tokenId2, {from: advertiser} );
        }).then( function(){
            assert.fail("Do not allow to reclaim before expiration!");
        }).catch(function(error) {
            return delay(7000);
        }).then(function(result) {
            return campaign.reclaim(tokenId2, {from: advertiser} );
        }).then(function(result) {
            var log = result.logs[0];

            assert.equal('Reclaimed', log.event);
            assert.equal(accounts[5], log.args.winner);
            assert.equal(advertiser, log.args.advertiser);
            assert.equal(tokenId2, log.args.tokenId.toNumber());

            return izx.balanceOf(advertiser);
        }).then(function(result) {
            assert.equal(balance, result.toNumber());
            return erc721.ownerOf(tokenId2);
        }).then(function(result) {
            assert.equal(accounts[5], result);
        });
    });

});