var RevShareGameToken = artifacts.require("RevShareGameToken");
var GameController = artifacts.require("GameController");
var ProxyController = artifacts.require("ProxyController");
var RevShareGame = artifacts.require("RevShareGame");

function delay(t) {
    return new Promise(function(resolve) {
        setTimeout(resolve, t)
    });
}

contract('RevShareGame', function(accounts) {


    it("should have initial balances of tokens for players", function() {
        var token, game, controller, game_controller;

        return RevShareGameToken.deployed().then(function(instance) {
            token = instance;
            return RevShareGame.deployed();
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
            console.log(game.address);
            return game_controller.available_amount(accounts[1], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(5), result.toNumber());

            return game_controller.available_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(7), result.toNumber());
            return game_controller.owners(game.address);
        }).then(function(result) {
            assert.equal(2, result.length);
            assert.equal(accounts[1], result[0]);
            assert.equal(accounts[2], result[1]);
            return game_controller.owner_index(accounts[1], game.address);
        }).then(function(result) {
            assert.equal(1, result);
            return game_controller.owner_index(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(2, result);
        });
    });

    /*

    it("should allow owner to issue prize", function() {

        var token, game, game_controller, hash;

        return RevShareGameToken.deployed().then(function(instance) {
            token = instance;
            return RevShareGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(result) {
            game_controller = GameController.at(result);
            return game.key_hash256(0);
        }).then(function(result) {
            hash = result;
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
            assert.isTrue(args.expiration.toNumber() > (new Date().getTime()/1000 + 3));

            return token.balanceOf(game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0.5), result.toNumber());
            return game.prizes(hash);
        }).then(function(result) {
            assert.equal(accounts[1], result[0]);
            assert.equal(accounts[1], result[1]);
            assert.equal(web3.toWei(0.5), result[2].toNumber());
            assert.equal(web3.toWei(0), result[3].toNumber());
            assert.isTrue(result[4].toNumber()  > (new Date().getTime()/1000 + 3));

            return game_controller.approved_amount(accounts[1], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(5), result.toNumber());
            return game_controller.reserved_amount(accounts[1], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0.5), result.toNumber());
        });
    });


    it("should give the prize to winner", function() {

        var token, game, game_controller, hash;

        return RevShareGameToken.deployed().then(function(instance) {
            token = instance;
            return RevShareGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(result) {
            game_controller = GameController.at(result);
            return game.key_hash256(0);
        }).then(function(result) {
            hash = result;
            return game.claim( 0, { from: accounts[3] } );
        }).then(function(result) {
            assert.equal(1, result.logs.length);

            var log = result.logs[0];
            var args = log.args;

            assert.equal('Claim', log.event);
            assert.equal(accounts[1], args.issuer);
            assert.equal(accounts[1], args.owner);
            assert.equal(accounts[3], args.winner);
            assert.equal(hash.toNumber(), args.hash.toNumber());
            assert.equal(web3.toWei(0.5), args.tokens.toNumber());
            assert.equal(0, args.value.toNumber());

            assert.equal(2, result.receipt.logs.length);

            return token.balanceOf(game.address);
        }).then(function(result) {
            assert.equal(0, result.toNumber());
            return token.balanceOf(accounts[3]);
        }).then(function(result) {
            assert.equal(web3.toWei(0.5), result.toNumber());
        });

    });

    it("should not allow claim same prize second time", function() {

        var token, game, game_controller, hash;

        return RevShareGameToken.deployed().then(function(instance) {
            token = instance;
            return RevShareGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(result) {
            game_controller = GameController.at(result);
            return game.key_hash256(0);
        }).then(function(result) {
            hash = result;
            return game.claim( 0, { from: accounts[3] } );
        }).then(function(result) {
            assert.fail("Exception expected");
        }).catch(function(error) {
        });

    });

    it("should allow owner to issue many prizes", function() {

        var token, game, game_controller;
        var hashes = [];

        return RevShareGameToken.deployed().then(function(instance) {
            token = instance;
            return RevShareGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(result) {
            game_controller = GameController.at(result);
            return game.key_hash256(1);
        }).then(function(result) {
            hashes.push(result);
            return game.key_hash256(2);
        }).then(function(result) {
            hashes.push(result);
            return game.key_hash256(3);
        }).then(function(result) {
            hashes.push(result);
            return game.issue(hashes, {from: accounts[2], gas: 650000 });
        }).then(function(result) {
            assert.equal(3, result.logs.length);
            return token.balanceOf(game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(1.5), result.toNumber());
            return game_controller.approved_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(7), result.toNumber());
            return game_controller.reserved_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(1.5), result.toNumber());
        });
    });


    it("should allow issuer to revoke by hash at any time", function() {

        var token, game, game_controller, hash;

        return RevShareGameToken.deployed().then(function(instance) {
            token = instance;
            return RevShareGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(result) {
            game_controller = GameController.at(result);
            return game.key_hash256(3);
        }).then(function(result) {
            hash = result;
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(web3.toWei(8.5), result.toNumber());
        }).then(function() {
            return game.revoke( [hash], { from: accounts[2] } );
        }).then(function(result) {
            assert.equal(1, result.logs.length);

            var log = result.logs[0];
            var args = log.args;

            assert.equal('Revoke', log.event);
            assert.equal(accounts[2], args.issuer);
            assert.equal(accounts[2], args.owner);
            assert.equal(web3.toWei(0.5), args.tokens.toNumber());

            assert.equal(2, result.receipt.logs.length);

            return token.balanceOf(game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(1.0), result.toNumber());
            return token.balanceOf(accounts[4]);
        }).then(function(result) {
            assert.equal(0, result.toNumber());
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(web3.toWei(9.0), result.toNumber());
            return game_controller.reserved_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(1.0), result.toNumber());
        });

    });


    it("should revoke the prize after expiration", function() {

        var token, game, game_controller;

        return RevShareGameToken.deployed().then(function(instance) {
            token = instance;
            return RevShareGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(result) {
            game_controller = GameController.at(result);
            return delay(6000);
        }).then(function() {
            return game.claim( 1, { from: accounts[4] } );
        }).then(function(result) {
            assert.equal(1, result.logs.length);

            var log = result.logs[0];
            var args = log.args;

            assert.equal('Revoke', log.event);
            assert.equal(accounts[2], args.issuer);
            assert.equal(accounts[2], args.owner);
            assert.equal(web3.toWei(0.5), args.tokens.toNumber());

            assert.equal(2, result.receipt.logs.length);

            return token.balanceOf(game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0.5), result.toNumber());
            return token.balanceOf(accounts[4]);
        }).then(function(result) {
            assert.equal(0, result.toNumber());
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(web3.toWei(9.5), result.toNumber());
            return game_controller.reserved_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0.5), result.toNumber());
        });

    });


    it("should allow to revoke by hash", function() {

        var token, game, game_controller, hash;


        return RevShareGameToken.deployed().then(function(instance) {
            token = instance;
            return RevShareGame.deployed();
        }).then(function(instance) {
            game = instance;
            return game.controller();
        }).then(function(result) {
            game_controller = GameController.at(result);
            return game.key_hash256(2);
        }).then(function(result) {
            hash = result;
            return game.revoke( [hash], { from: accounts[4] } );
        }).then(function(result) {
            assert.equal(1, result.logs.length);

            var log = result.logs[0];
            var args = log.args;

            assert.equal('Revoke', log.event);
            assert.equal(accounts[2], args.issuer);
            assert.equal(accounts[2], args.owner);
            assert.equal(web3.toWei(0.5), args.tokens.toNumber());

            assert.equal(2, result.receipt.logs.length);

            return token.balanceOf(game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0), result.toNumber());
            return token.balanceOf(accounts[4]);
        }).then(function(result) {
            assert.equal(0, result.toNumber());
            return token.balanceOf(accounts[2]);
        }).then(function(result) {
            assert.equal(web3.toWei(10.0), result.toNumber());
            return game_controller.reserved_amount(accounts[2], game.address);
        }).then(function(result) {
            assert.equal(web3.toWei(0), result.toNumber());
        });

    });

*/
});
