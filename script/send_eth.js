const cli = require('readline-sync');
const Connection = require('./eth_connection');

const environment = 'foundation'; // ropsten/foundation, change to foundation to deploy to real
var mnemonics = cli.question('Enter your mnemonics for '+environment+' account:');
var connection = new Connection(mnemonics, environment);

connection.web3.eth.getBalance(connection.address, function(error,result){
        if(error){
            console.log(error);
            process.exit(1);
        }else{
            console.log( "Creator address is: "+connection.address);
            console.log( "Creator balance is: "+connection.web3.fromWei(result.toNumber()) + 'ETH' );

            var receiver = cli.question('Enter destination address to transfer:');
            var amount = cli.question('Enter amount to transfer:');
            var gas = cli.question('Enter gas for transfer (e.g. 21000):');

            var gasprice = cli.question('Enter gas price in gwei:');
            var yesno = cli.question('Enter Yes! to continue in '+environment+ ' with these parameters: ');
            if(yesno!='Yes!'){
                console.log('Not confirmed, stopping');
                process.exit(1);
            }
            console.log('transfering now...');

            connection.web3.eth.sendTransaction({from: connection.address,
                                                                value: connection.web3.toWei(amount, 'ether'),
                                                                to: receiver,
                                                                gas: gas,
                                                                gasPrice: connection.web3.toWei(gasprice, 'gwei')},
                function(error, result){
                    console.log(error, result);
                    if(result) {
                        connection.close();
                        console.log('Done.');
                    }
                }
            );


        }

    }
);

