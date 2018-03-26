var DriveToken = artifacts.require("DriveToken");

module.exports = function(deployer) {

    deployer.deploy(DriveToken).then(function(){
        return DriveToken.deployed();
    }).then(function(instance){
        console.log("Deployed DriveToken "+instance.address);
    });

};
