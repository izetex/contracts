var GameToken = artifacts.require("GameToken");
var GameController = artifacts.require("GameController");
var ProxyController = artifacts.require("ProxyController");
var TokenGame = artifacts.require("TokenGame");


contract('TokenGame', function(accounts) {


    it("should have initial balances of tokens for players", function() {
        var token, game, controller, game_controller;

        return GameToken.deployed().then(function(instance) {
            token = instance;
            return TokenGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(result) {
            game_controller = GameController.at(result);
            return token.controller();
        }).then(function(result) {
            controller = ProxyController.at(result);
            return controller.generateTokens(accounts[1], web3.toWei(5), {from: accounts[0], gas: 150000});
        }).then(function() {
            return controller.generateTokens(accounts[2], web3.toWei(10), {from: accounts[0], gas: 150000});
        }).then(function() {
            return token.approve(game.address, web3.toWei(5.0), { from: accounts[1], gas: 150000 });
        }).then(function() {
            return token.approve(game.address, web3.toWei(7.0), { from: accounts[2], gas: 150000 });
        }).then(function() {
            return game_controller.available_amount(accounts[1], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(5), result.toNumber());
            return game_controller.available_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(7), result.toNumber());
        });
    });


    it("should issue prize", function() {
        var token, game, game_controller, hash;

        return GameToken.deployed().then(function(instance) {
            token = instance;
            return TokenGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(result) {
            game_controller = GameController.at(result);
            return game.key_hash256(0);
        }).then(function(result) {
            hash = result;
            console.log(hash.toString(16));
            return game.issue([hash], {from: accounts[1], gas: 250000 });
        }).then(function(result) {

            assert.equal(2, result.receipt.logs.length);

            var log = result.receipt.logs[0]; // Transfer
            assert.equal(token.address,log.address);
            assert.equal(parseInt(accounts[1]),parseInt(log.topics[1]));
            assert.equal(parseInt(game.address),parseInt(log.topics[2]));

            log = result.receipt.logs[1]; // Issue
            assert.equal(game.address,log.address);
            assert.equal(parseInt(accounts[1]),parseInt(log.topics[1]));
            assert.equal(parseInt(accounts[1]),parseInt(log.topics[2]));


            assert.equal(1, result.logs.length);

            log = result.logs[0];
            var args = log.args;

            assert.equal('Issue', log.event);
            assert.equal(game.address,log.address);
            assert.equal(accounts[1], args.issuer);
            assert.equal(accounts[1], args.owner);
            assert.equal(hash.toString(16), args.hash.toString(16));
            assert.equal(web3.toWei(0.5), args.tokens.toNumber());
            assert.equal(0, args.value.toNumber());
            assert.isTrue(args.expiration.toNumber() > (new Date().getTime()/1000 + 5));

        });
    });


});
