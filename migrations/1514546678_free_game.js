var FreeGameToken = artifacts.require("FreeGameToken");
var GameController = artifacts.require("GameController");
var ProxyController = artifacts.require("ProxyController");
var FreeGame = artifacts.require("FreeGame");


module.exports = function(deployer) {


    var token, controller, proxy, game;

    deployer.deploy(FreeGameToken).then(function(){
        return FreeGameToken.deployed();
    }).then(function(instance){
        token = instance;
        return ProxyController.new(token.address, 0);
    }).then(function(instance){
        proxy = instance;
        return token.changeController(proxy.address);
    }).then(function(){
        return GameController.new(token.address, proxy.address);
    }).then(function(instance){
        controller = instance;
        return proxy.changeProxiedController(controller.address);
    }).then(function(){
        return deployer.deploy(FreeGame,
                                token.address,
                                controller.address,
                                10, //_prize_life_time
                                web3.toWei(0.5)  // prize tokens
        );
    }).then(function(){
        return FreeGame.deployed();
    }).then(function(instance){
        game = instance;
        console.log("Deployed FreeGame "+game.address+" with token "+ token.address + " and controller "+
            controller.address + " through proxy " + proxy.address);
    });


};
