var RevShareGameToken = artifacts.require("RevShareGameToken");
var GameController = artifacts.require("GameController");
var ProxyController = artifacts.require("ProxyController");
var RevShareGame = artifacts.require("RevShareGame");


module.exports = function(deployer) {


    var token, controller, proxy, game;

    deployer.deploy(RevShareGameToken).then(function(){
        return RevShareGameToken.deployed();
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
        return deployer.deploy(RevShareGame,
                            token.address,
                            controller.address,
                            10, //_prize_life_time
                            web3.toWei(0.01), // prize_price
                            25,     // _dev_commission,
                            70,     // _owner_commission,
                            5       // _issuer_commission
            );

    }).then(function(){
        return RevShareGame.deployed();
    }).then(function(instance){
        game = instance;
        console.log("Deployed RevShareGame "+game.address+" with token "+ token.address + " and controller "+
            controller.address + " through proxy " + proxy.address);
    });


};
