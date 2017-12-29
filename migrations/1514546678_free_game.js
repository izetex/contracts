var FreeGameToken = artifacts.require("FreeGameToken");
var GameController = artifacts.require("GameController");
var FreeGame = artifacts.require("FreeGame");


module.exports = function(deployer) {


    var token, controller, game;

    deployer.deploy(FreeGameToken).then(function(){
        return FreeGameToken.deployed();
    }).then(function(instance){
        token = instance;
        return GameController.new(token.address);
    }).then(function(instance){
        controller = instance;
        return token.changeController(controller.address);
    }).then(function(){
        return deployer.deploy(FreeGame, token.address, controller.address, 10  );
    }).then(function(){
        return FreeGame.deployed();
    }).then(function(instance){
        game = instance;
        console.log("Deployed FreeGame "+game.address+" with token "+ token.address + " and controller "+ controller.address);
    });


};
