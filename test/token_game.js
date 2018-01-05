var GameToken = artifacts.require("GameToken");
var ProxyController = artifacts.require("ProxyController");
var GameController = artifacts.require("GameController");
var TokenGame = artifacts.require("TokenGame");


contract('GameToken', function(accounts) {


    it("should have 18 digits", function() {
        return GameToken.deployed().then(function(instance) {
            return instance.decimals.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), 18);
        });
    });

    it("should have 0 supply", function() {
        return GameToken.deployed().then(function(instance) {
            return instance.totalSupply.call();
        }).then(function(result) {
            assert.equal(result.valueOf(), 0);
        });
    });

    it("should have symbol", function() {
        return GameToken.deployed().then(function(instance) {
            return instance.symbol.call();
        }).then(function(result) {
            assert.equal(result, 'FGT');
        });
    });

    it("should have controller", function() {
        return GameToken.deployed().then(function(instance) {
            return instance.controller();
        }).then(function(result) {
            assert.isTrue(!!result);
        });
    });
});


contract('ProxyController', function(accounts) {


    it("should generate tokens to players", function() {
        var token, controller;

        return GameToken.deployed().then(function(instance) {
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

    it("should allow transfer tokens from player to player", function() {
        var token;

        return GameToken.deployed().then(function(instance) {
           token = instance;
           return token.transfer(accounts[2], web3.toWei(1), {from: accounts[1], gas: 150000});
        }).then(function() {
            return token.totalSupply();
        }).then(function(result) {
            assert.equal(web3.toWei(15), result.toNumber());
            return token.balanceOf(accounts[1]);
        }).then(function(result) {
            assert.equal(web3.toWei(4), result.toNumber());
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(web3.toWei(11), result.toNumber());
        });


    });

    it("should allow approve tokens from player to player", function() {
        var token;

        return GameToken.deployed().then(function(instance) {
            token = instance;
            return token.approve(accounts[1], web3.toWei(1), {from: accounts[2], gas: 150000});
        }).then(function() {
            return token.allowance(accounts[2], accounts[1]);
        }).then(function(result) {
            assert.equal(web3.toWei(1), result.toNumber());
            return token.transferFrom(accounts[2], accounts[1], web3.toWei(1), {from: accounts[1], gas: 150000});
        }).then(function() {
            return token.balanceOf(accounts[1]);
        }).then(function(result) {
            assert.equal(web3.toWei(5), result.toNumber());
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(web3.toWei(10), result.toNumber());
        });


    });


    it("should not allow transfer tokens to contract", function() {
        var token, controller;

        return GameToken.deployed().then(function(instance) {
            token = instance;
            return token.controller();
        }).then(function(result) {
            controller = ProxyController.at(result);
            return controller.allowTransfersToContracts();
        }).then(function(result) {
            assert.isFalse(result);
            return token.transfer(token.address, web3.toWei(0.1), {from: accounts[1], gas: 150000});
        }).then( function(){
            assert.fail("Exception expected");
        }).catch(function(error) {
            return controller.setTransfersToContractsAllowed(true, {from: accounts[0], gas: 150000});
        }).then( function(){
            return controller.allowTransfersToContracts();
        }).then(function(result) {
            assert.isTrue(result);
            return token.transfer(token.address, web3.toWei(0.1), {from: accounts[1], gas: 150000});
        }).then(function() {
            return token.balanceOf(accounts[1]);
        }).then(function(result) {
            assert.equal(web3.toWei(4.9), result.toNumber());
            return token.balanceOf(token.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0.1), result.toNumber());
            return controller.setTransfersToContractsAllowed(false, {from: accounts[0], gas: 150000});
        }).then( function(){
            return controller.allowTransfersToContracts();
        }).then(function(result) {
            assert.isFalse(result);
        });


    });

});

contract('GameController', function(accounts) {

    it("should accept tokens approval for prizes", function() {
        var token, game, controller;
        return GameToken.deployed().then(function(instance) {
            token = instance;
            return TokenGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(instance) {
            controller = GameController.at(instance);
            return controller.approved_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(0, result.toNumber());
            return token.approve(game.address, web3.toWei(2.0), { from: accounts[2], gas: 150000 });
        }).then(function() {
            return token.allowance(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(2.0), result.toNumber());
            return controller.owners(game.address);
        }).then(function(result) {
            assert.equal(1, result.length);
            assert.equal(accounts[2], result[0]);
            return controller.owner_index(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(1, result.toNumber());
            return controller.approved_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(2.0), result.toNumber());
            return controller.reserved_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(0, result.toNumber());
            return token.approve(game.address, web3.toWei(30.0), { from: accounts[1], gas: 150000 });
        }).then(function() {
            return token.allowance(accounts[1], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(30.0), result.toNumber());
            return controller.approved_amount(accounts[1], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(30.0), result.toNumber());
            return controller.owner_index(accounts[1], game.address);
        }).then(function(result) {
            assert.equal(2, result.toNumber());
            return controller.owners(game.address);
        }).then(function(result) {
            assert.equal(2, result.length);
            assert.equal(accounts[2], result[0]);
            assert.equal(accounts[1], result[1]);
        });

    });


    it("should update tokens approval for prizes", function() {
        var token, game, controller;
        return GameToken.deployed().then(function(instance) {
            token = instance;
            return TokenGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(instance) {
            controller = GameController.at(instance);
            return controller.approved_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(2.0), result.toNumber());
            return token.approve(game.address, web3.toWei(1.0), { from: accounts[2], gas: 150000 });
        }).then(function() {
            return token.allowance(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(1.0), result.toNumber());
            return controller.owners(game.address);
        }).then(function(result) {
            assert.equal(2, result.length);
            assert.equal(accounts[2], result[0]);
            assert.equal(accounts[1], result[1]);
            return controller.owner_index(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(1, result.toNumber());
        });

    });


    it("should allow generate tokens to players throw proxy", function() {
        var token, controller;

        return GameToken.deployed().then(function(instance) {
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

    it("should find amount_owner", function() {
        var token, game, controller;
        return GameToken.deployed().then(function(instance) {
            token = instance;
            return TokenGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(instance) {
            controller = GameController.at(instance);
            return controller.amount_owner(game.address, web3.toWei(0.0));
        }).then(function(result) {
            assert.equal(accounts[2], result);
            return controller.amount_owner(game.address, web3.toWei(1.0));
        }).then(function(result) {
            assert.equal(accounts[2], result);
            return controller.amount_owner(game.address, web3.toWei(3.0));
        }).then(function(result) {
            assert.equal(accounts[1], result);
            return controller.amount_owner(game.address, web3.toWei(5.0));
        }).then(function(result) {
            assert.equal(accounts[1], result);
        });
    });

    it("should limit amount_owner by balance", function() {
        var token, game, controller;
        return GameToken.deployed().then(function(instance) {
            token = instance;
            return TokenGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(instance) {
            controller = GameController.at(instance);
            return controller.amount_owner(game.address, web3.toWei(5.1));
        }).then(function(result) {
            assert.equal(0, result);
        });

    });

});

