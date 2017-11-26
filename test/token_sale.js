var IZXToken = artifacts.require("IZXToken");

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

