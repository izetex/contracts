const cli = require('readline-sync');
const Connection = require('./eth_connection');
const token_distribution = require('./contracts/token_distribution');

const environment = 'foundation'; // ropsten/foundation, change to foundation to deploy to real
var mnemonics = cli.question('Enter your mnemonics or pkey for '+environment+' account:');
var connection = new Connection(mnemonics, environment);


function deploy_contract(connection, token_distribution, gasprice, callback){

    var _tokenAddress = connection.config.token;/* var of type address here */ ;

    var thisContract = connection.web3.eth.contract(token_distribution.abi);

    console.log('Deploying contract with gas: '+token_distribution.gas);

    thisContract.new(
        _tokenAddress,
        {
            from: connection.address,
            data: token_distribution.bytecode,
            gas: token_distribution.gas,
            gasPrice: connection.web3.toWei(gasprice, 'gwei')
        }, function (e, contract){
            if(e){
                console.log(e);
            }
            callback(contract);
        })


}

connection.web3.eth.getBalance(connection.address, function(error,result){
        if(error){
            console.log(error);
            process.exit(1);
        }else{
            console.log( "Creator address is: "+connection.address);
            console.log( "Creator balance is: "+connection.web3.fromWei(result.toNumber()) + 'ETH' );
            console.log( 'Token address '+ connection.config.token );
            var gasprice = cli.question('Enter gas price in gwei:');

            var yesno = cli.question('Enter Yes! to continue in '+environment+ ' with these parameters: ');
            if(yesno!='Yes!'){
                console.log('Not confirmed, stopping');
                process.exit(1);
            }
            console.log('deploying now...');
            deploy_contract(connection, tokensale, gasprice, function(deployed){
                if(deployed) {
                    console.log('Contract transactionHash: ' + deployed.transactionHash);
                    connection.close();
                    console.log('Done.');
                }
            });


        }

    }
);
