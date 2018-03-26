const cli = require('readline-sync');
const Connection = require('./eth_connection');
const token_driver = require('./contracts/token_driver');
const request = require('request');
const fs = require('fs');

const environment = 'ropsten'; // only at ropsten we generate tokens manually

var mnemonics = cli.question('Enter your mnemonics or pkey for '+environment + ': ');
var connection = new Connection(mnemonics, environment, true);

var deployed_driver = connection.web3.eth.contract(token_driver.abi).at(connection.config.token_driver);

var erc721 = cli.question('Enter address of ERC721 token for auction in '+environment + ': ');
var lifetime = cli.question('Enter lifetime of prize in seconds (>0): ');
var token_price = cli.question('Enter token price in IZX: ');
var host_share = cli.question('Enter percentage of host commission ( 0 to 100 ): ');

var gasprice = cli.question('Enter gas price in gwei:');
var yesno = cli.question('Enter Yes! to continue in '+environment+ ' with these parameters: ');
if(yesno!='Yes!'){
    console.log('Not confirmed, stopping');
    process.exit(1);
}
console.log('calling now...');

deployed_driver.createCampaign.sendTransaction(
            erc721,lifetime, connection.web3.toWei(token_price), host_share ,
    {   from: connection.address,
        gas: 1000000,
        gasPrice: connection.web3.toWei(gasprice, 'gwei')},
    function(error, result){
        console.log(error, result);
        if(result) {
            connection.close();
            console.log('Done.');
        }
    }
);