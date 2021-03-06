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

    it('should transfer tokens by ETH transfer', function() {

        var sale, token, wallet;
        var initial_balance, initial_tokens, rate;
        var totalSupply, totalTokenCount, totalCollected;


        var sender = accounts[0];
        var wei = parseInt(web3.toWei(1));

        return TokenSale.deployed().then(function(instance) {
            sale = instance;
            return sale.exchangeRate();
        }).then(function(result) {
            rate = result.toNumber();
            return IZXToken.deployed();
        }).then(function(instance) {
            token = instance;
            return token.balanceOf(sender);
        }).then(function(result) {
            initial_tokens = result.toNumber();
            return token.totalSupply();
        }).then(function(result) {
            totalSupply = result.toNumber();
            return sale.totalTokenCount();
        }).then(function(result) {
            totalTokenCount = result.toNumber();
            return sale.totalCollected();
        }).then(function(result) {
            totalCollected = result.toNumber();
            return Wallet.deployed();
        }).then(function(instance) {
            wallet = instance;
            initial_balance = web3.eth.getBalance(wallet.address).toNumber();
            return token.balanceOf(sender);
        }).then(function(result) {
            return web3.eth.sendTransaction({from: sender, to: token.address, value: wei, gas: 120000});
        }).then(function(result) {
            return token.balanceOf(sender);
        }).then(function(result) {
            var final_tokens = result.toNumber();
            var final_balance = web3.eth.getBalance(wallet.address).toNumber();

            assert.equal(final_balance, initial_balance + wei ) ;
            assert.equal(final_tokens, initial_tokens + rate*wei/100);

            return token.totalSupply();
        }).then(function(result) {
            assert.equal(result.toNumber(), totalSupply + (rate*wei/100));
            return sale.totalTokenCount();
        }).then(function(result) {
            assert.equal(result.toNumber(), totalTokenCount + (rate*wei/100));
            return sale.totalCollected();
        }).then(function(result) {
            assert.equal(result.toNumber(), totalCollected + wei);
            return Wallet.deployed();
        });

    });

    it('should change ETH rate', function() {


        var sale, token, wallet;
        var initial_balance, initial_tokens;


        var sender = accounts[0];
        var wei = parseInt(web3.toWei(1));

        var rate = 230*100;
        var block;

        return TokenSale.deployed().then(function(instance) {
            sale = instance;
            return sale.setExchangeRate(rate);
        }).then(function(result) {
            block = web3.eth.blockNumber;
            return sale.exchangeRateAt();
        }).then(function(result) {
            assert.equal(result.toNumber(), block);
            return IZXToken.deployed();
        }).then(function(instance) {
            token = instance;
            return token.balanceOf(sender);
        }).then(function(result) {
            initial_tokens = result.toNumber();
            return Wallet.deployed();
        }).then(function(instance) {
            wallet = instance;
            initial_balance = web3.eth.getBalance(wallet.address).toNumber();
            return token.balanceOf(sender);
        }).then(function(result) {
            return web3.eth.sendTransaction({from: sender, to: token.address, value: wei, gas: 120000});
        }).then(function(result) {
            return token.balanceOf(sender);
        }).then(function(result) {
            var final_tokens = result.toNumber();
            var final_balance = web3.eth.getBalance(wallet.address).toNumber();

            assert.equal(final_balance, initial_balance + wei ) ;
            assert.equal(final_tokens, initial_tokens + rate*wei/100);

            return token.totalSupply();
        });



    });

    it('should distribute tokens', function() {

        var sale, token;
        var totalSupply;
        var initial_tokens = [0,0,0];
        var new_tokens = [parseInt(web3.toWei(10)),parseInt(web3.toWei(2200)),parseInt(web3.toWei(0.1))];

        var owners = [accounts[2], accounts[4], accounts[6]];

        return TokenSale.deployed().then(function(instance) {
            sale = instance;
            return IZXToken.deployed();
        }).then(function(instance) {
            token = instance;
            return token.totalSupply();
        }).then(function(result) {
            totalSupply = result.toNumber();
            return token.balanceOf(owners[0]);
        }).then(function(result) {
            initial_tokens[0] = result.toNumber();
            return token.balanceOf(owners[1]);
        }).then(function(result) {
            initial_tokens[1] = result.toNumber();
            return token.balanceOf(owners[2]);
        }).then(function(result) {
            initial_tokens[2] = result.toNumber();
            return sale.distributeTokens(owners, new_tokens, {from: accounts[0], gas: 220000});
        }).then(function(result) {
            return token.balanceOf(owners[0]);
        }).then(function(result) {
            assert.equal(result.toNumber(), initial_tokens[0] + new_tokens[0]);
            return token.balanceOf(owners[1]);
        }).then(function(result) {
            assert.equal(result.toNumber(), initial_tokens[1] + new_tokens[1]);
            return token.balanceOf(owners[2]);
        }).then(function(result) {
            assert.equal(result.toNumber(), initial_tokens[2] + new_tokens[2]);
            return token.totalSupply();
        }).then(function(result) {
            assert.equal(result.toNumber(), totalSupply + new_tokens[0] + new_tokens[1] + new_tokens[2]);
        });

    });

    it('should disable transfer tokens', function() {

        var sale, token;
        var initial_tokens = [0, 0];
        var owners = [accounts[2], accounts[4]];
        var amount = parseInt(web3.toWei(123));

        return TokenSale.deployed().then(function (instance) {
            sale = instance;
            return IZXToken.deployed();
        }).then(function (instance) {
            token = instance;
            return token.balanceOf(owners[0]);
        }).then(function(result) {
            initial_tokens[0] = result.toNumber();
            return token.balanceOf(owners[1]);
        }).then(function(result) {
            initial_tokens[1] = result.toNumber();
            return sale.setTransfersAllowed(false);
        }).then(function(result) {
            return sale.transfersAllowed();
        }).then(function(result) {
            assert.equal(false, result.valueOf());
            return token.transfer(owners[1], initial_tokens[0], {from: owners[0], gas: 70000});
        }).then(function(result) { assert(false); }, function(error){
            return token.balanceOf(owners[0]);
        }).then(function(result) {
            assert.equal(result.toNumber(), initial_tokens[0]);
            return token.balanceOf(owners[1]);
        }).then(function(result) {
            assert.equal(result.toNumber(), initial_tokens[1]);
        });

    });


    it('should enable transfer tokens', function() {

        var sale, token;
        var initial_tokens = [0, 0];
        var owners = [accounts[2], accounts[4]];

        return TokenSale.deployed().then(function (instance) {
            sale = instance;
            return IZXToken.deployed();
        }).then(function (instance) {
            token = instance;
            return token.balanceOf(owners[0]);
        }).then(function(result) {
            initial_tokens[0] = result.toNumber();
            return token.balanceOf(owners[1]);
        }).then(function(result) {
            initial_tokens[1] = result.toNumber();
            return sale.setTransfersAllowed(true);
        }).then(function(result) {
            return sale.transfersAllowed();
        }).then(function(result) {
            assert.equal(true, result.valueOf());
            token.transfer(owners[1], initial_tokens[0], {from: owners[0], gas: 120000});
            return token.balanceOf(owners[0]);
        }).then(function(result) {
            assert.equal(result.toNumber(), 0);
            return token.balanceOf(owners[1]);
        }).then(function(result) {
            assert.equal(result.toNumber(), initial_tokens[1] + initial_tokens[0]);
        });


    });


    it('should change controller', function() {

        var sale, token;

        return TokenSale.deployed().then(function (instance) {
            sale = instance;
            return IZXToken.deployed();
        }).then(function (instance) {
            return sale.distributeTokens([accounts[5]], [1111111], {from: accounts[5], gas: 120000});
        }).then(function(result) { assert(false); }, function(e){

        });

    });

    it('should protect to change controller', function() {

        var sale, token;

        return TokenSale.deployed().then(function (instance) {
            sale = instance;
            return IZXToken.deployed();
        }).then(function (instance) {
            token = instance;
            return token.controller();
        }).then(function(result) {
            assert.equal(result.valueOf(), sale.address);
            return sale.owner();
        }).then(function(result) {
            assert.equal(result.valueOf(), accounts[0]);
            return sale.changeController(accounts[5], {gas: 70000, from: accounts[5] });
        }).then(function(result) { assert(false); }, function(e){
            return token.controller();
        }).then(function(result) {
            assert.equal(result.valueOf(), sale.address);
            return token.changeController(accounts[5], {gas: 70000, from: accounts[5] });
        }).then(function(result) { assert(false)}, function(e){
            return token.controller();
        }).then(function(result) {
            assert.equal(result.valueOf(), sale.address);
        });


    });

    it('should protect distribute tokens', function() {

        var sale, token;

        return TokenSale.deployed().then(function (instance) {
            sale = instance;
            return IZXToken.deployed();
        }).then(function (instance) {
            token = instance;
            return token.controller();
        }).then(function(result) {

            return token.transfer(owners[1], initial_tokens[0], {from: owners[1], gas: 120000});

            assert.equal(result.valueOf(), sale.address);
            return sale.owner();
        }).then(function(result) {
            assert.equal(result.valueOf(), accounts[0]);
            return sale.changeController(accounts[5], {gas: 70000, from: accounts[5] });
        }).then(function(result) { assert(false); }, function(e){
            return token.controller();
        }).then(function(result) {
            assert.equal(result.valueOf(), sale.address);
            return token.changeController(accounts[5], {gas: 70000, from: accounts[5] });
        }).then(function(result) { assert(false)}, function(e){
            return token.controller();
        }).then(function(result) {
            assert.equal(result.valueOf(), sale.address);
        });

    });


});

