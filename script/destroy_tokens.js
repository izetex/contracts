const cli = require('readline-sync');
const Connection = require('./eth_connection');
const izx_token = require('./contracts/izx_token');
const request = require('request');
const fs = require('fs');

const environment = 'foundation'; // only at ropsten we generate tokens manually

var mnemonics = cli.question('Enter your mnemonics or pkey for '+environment + ': ');
var connection = new Connection(mnemonics, environment);

var deployed_token = connection.web3.eth.contract(izx_token.abi).at(connection.config.token);

var amount = cli.question('Enter amount of tokens to destroy in '+environment + ': ');
var amount_burner = cli.question('Enter token holder address to destroy '+amount+ ' tokens: ');

var gasprice = cli.question('Enter gas price in gwei:');
var yesno = cli.question('Enter Yes! to continue in '+environment+ ' with these parameters: ');
if(yesno!='Yes!'){
    console.log('Not confirmed, stopping');
    process.exit(1);
}
console.log('generating now...');

deployed_token.destroyTokens.sendTransaction( amount_burner, connection.web3.toWei(amount) , {
        from: connection.address,
        gas: 80000,
        gasPrice: connection.web3.toWei(gasprice, 'gwei')},
    function(error, result){
        console.log(error, result);
        if(result) {
            connection.close();
            console.log('Done.');
        }
    }
);