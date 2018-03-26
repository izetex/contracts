const cli = require('readline-sync');
const Connection = require('./eth_connection');
const drive_token = require('./contracts/drive_token');

const environment = 'ropsten';
var mnemonics = cli.question('Enter your mnemonics or pkey for '+environment+' account:');
var connection = new Connection(mnemonics, environment, true);

function deploy_contract(connection, contract, gas, gasprice, callback){

    var contract_class = connection.web3.eth.contract(contract.abi);
    contract_class.new(
        {
            from: connection.address,
            data: contract.bytecode,
            gas: gas,
            gasPrice: connection.web3.toWei(gasprice, 'gwei')
        }, function (e, c){
            if(e){
                console.log(e);
            }
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
            var gasprice = cli.question('Enter gas price in gwei:');
            var yesno = cli.question('Enter Yes! to continue in '+environment+ ' with these parameters: ');
            if(yesno!='Yes!'){
                console.log('Not confirmed, stopping');
                process.exit(1);
            }
            console.log('deploying now...');
            deploy_contract(connection, drive_token, 1500000, gasprice, function(deployed){
                if(deployed) {
                    console.log('Contract transactionHash: ' + deployed.transactionHash);
                    connection.close();
                    console.log('Done.');
                }
            });


        }

    }
);

