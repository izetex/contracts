const cli = require('readline-sync');
const Connection = require('./eth_connection');
const tokensale = require('./contracts/tokensale');
const request = require('request');
const fs = require('fs');

const environment = 'foundation'; // ropsten/foundation, change to foundation to deploy to real

var filename = cli.question('Enter full path to CSV file:');

var mnemonics = cli.question('Enter your mnemonics or pkey for '+environment + ': ');
var connection = new Connection(mnemonics, environment);

var deployed_tokensale = connection.web3.eth.contract(tokensale.abi).at(connection.config.tokensale);

var addresses = [];
var amounts = [];

fs.readFile(filename, 'utf8',function(err,data){

   var transfers = data.split('\n');
   var total = 0;

   for(var i=0;i<transfers.length;i++){
       var row = transfers[i].split(',');
       if(row[0].indexOf('0x')!=0)
           continue;
       addresses.push(row[0]);
       amounts.push( connection.web3.toWei(parseFloat(row[1])))

   }

    for(var i=0;i<addresses.length;i++){
       console.log(addresses[i] + ' <- ' + connection.web3.fromWei(amounts[i]) + ' IZX');
        total += parseFloat(connection.web3.fromWei(amounts[i]));
    }

   console.log( "Batch transactions: "+ addresses.length + ', total amount '+ total + ' IZX');

    var gasprice = cli.question('Enter gas price in gwei:');
    var yesno = cli.question('Enter Yes! to make token transfers in '+environment+': ');
    if(yesno!='Yes!'){
        console.log('Not confirmed, stopping');
        process.exit(1);
    }

    deployed_tokensale.distributeTokens(addresses, amounts, {from: connection.address, 
            gas: 40000*(addresses.length+1), gasPrice: connection.web3.toWei(gasprice, 'gwei')},
        function(error,result){
            console.log(error, result);
            if(result) {
                connection.close();
                console.log('Done.');
            }
        }
    );

});




