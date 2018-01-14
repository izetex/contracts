const Web3 = require('web3');
const ProviderEngine = require('web3-provider-engine');
const Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
const WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
const HDKey = require('ethereumjs-wallet/hdkey');
var eth = require('ethereumjs-wallet');
const BIP39 = require('bip39');
const Config = require('./config');

function Connection(mnemonics, environment, accept_any_address) {

    this.config = Config[environment];
    var wallet = null;
    
    if(BIP39.validateMnemonic(mnemonics)) {
        wallet = HDKey.fromMasterSeed(BIP39.mnemonicToSeed(mnemonics)).derivePath("m/44'/60'/0'/0/0").getWallet();
    }else if(mnemonics.match(/(0x)?[\da-fA-F]{64}/)) {
        if (mnemonics.indexOf('0x') == 0)
            mnemonics = mnemonics.slice(2);
        wallet = eth.fromPrivateKey(Buffer.from(mnemonics, "hex"));
    }else{
        throw('You should enter mnemonics or pkey');
    }

    this.address = wallet.getAddressString();
    
    if(!accept_any_address && this.address.toUpperCase() != this.config.creator.toUpperCase()){
        throw('Check mnemonics/pkey, it has wrong derived address: ' + this.address + ', expected: ' + this.config.creator  );
    }else{
        console.log('Derived address: '+this.address );
    }

    this.engine = new ProviderEngine();

    this.engine.addProvider(new WalletSubprovider(wallet, {}));
    this.engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(this.config.url)));
    this.engine.start();

    this.web3 = new Web3(this.engine);


}


// class methods
Connection.prototype.address = function() {
    return this.address;
};

// class methods
Connection.prototype.close = function() {
    this.engine.stop();
};

Connection.web3 = function() {
    return this.web3;
}

module.exports = Connection;