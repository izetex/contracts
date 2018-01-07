const cli = require('readline-sync');
const Connection = require('./eth_connection');
const rev_share_game = require('./contracts/rev_share_game');

const environment = 'ropsten'; // ropsten/foundation, change to foundation to deploy to real
var mnemonics = cli.question('Enter your mnemonics for '+environment+' account:');
var connection = new Connection(mnemonics, environment);

function deploy_contract(connection, contract, gas, callback){

    var contract_class = connection.web3.eth.contract(contract.abi);
    contract_class.new(
        connection.config.token,
        connection.config.controller,
        7*24*3600, // 7 days lifetime
        connection.web3.toWei(1), // prize tokens
        connection.web3.toWei(0.01), // prize_price
        33,     // _dev_commission,
        33,     // _owner_commission,
        0,       // _issuer_commission
    {
            from: connection.address,
            data: contract.bytecode,
            gas: gas
        }, function (e, c){
            callback(c);
        });
}

connection.web3.eth.getBalance(connection.address, function(error,result){
        if(error){
            console.log(error);
            process.exit(1);
        }else{
            console.log( "Creator address is: "+connection.address);
            console.log( "Creator balance is: "+connection.web3.fromWei(result.toNumber()) + 'ETH' );

            var yesno = cli.question('Enter Yes! to continue in '+environment+ ' with these parameters: ');
            if(yesno!='Yes!'){
                console.log('Not confirmed, stopping');
                process.exit(1);
            }
            console.log('deploying now...');
            deploy_contract(connection, rev_share_game, 1500000, function(deployed){
                if(deployed) {
                    console.log('Contract transactionHash: ' + deployed.transactionHash);
                    connection.close();
                    console.log('Done.');
                }
            });


        }

    }
);

