const cli = require('readline-sync');
const Connection = require('./eth_connection');
const tokensale = require('./tokensale');
const request = require('request');

const environment = 'foundation'; // ropsten/foundation, change to foundation to deploy to real
var mnemonics = cli.question('Enter your mnemonics for '+environment+' account:');
var connection = new Connection(mnemonics, environment);

var deployed_tokensale = connection.web3.eth.contract(tokensale.abi).at(connection.config.tokensale);

deployed_tokensale.exchangeRate(function(error,result){
        if(error){
            console.log(error);
            process.exit(1);
        }else{

            console.log( "Tokensale exchange rate is: "+ (result / 100.0) + ' USD/ETH');

            request('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=', function (error, response, body) {
                var ethusd = JSON.parse(body)['result']['ethusd'];
                console.log( 'Current USD rate on Etherscan '+ ethusd );

                var yesno = cli.question('Enter Yes! to change rate in environment: ');
                if(yesno!='Yes!'){
                    console.log('Not confirmed, stopping');
                    process.exit(1);
                }

                deployed_tokensale.setExchangeRate.sendTransaction( Math.round(ethusd*100.0), {from: connection.address, gas: 40000},
                    function(error, result){
                        console.log(error, result);
                        if(result) {
                            connection.close();
                            console.log('Done.');
                        }
                    }
                );


            });

        }

    }
);

