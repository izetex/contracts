const cli = require('readline-sync');
const Connection = require('./eth_connection');
const proxy_controller = require('./contracts/proxy_controller');

const environment = 'ropsten'; // ropsten/foundation, change to foundation to deploy to real
var mnemonics = cli.question('Enter your mnemonics or pkey for '+environment+' account:');
var new_controller = cli.question('New proxied Game controller address:');

var connection = new Connection(mnemonics, environment);
var deployed_proxy = connection.web3.eth.contract(proxy_controller.abi).at(connection.config.proxy);

deployed_proxy.proxiedController(function(error,result){
    if(error){
        console.log(error);
        process.exit(1);
    }else {
        console.log('Proxy address ' + connection.config.proxy);
        console.log("Current proxied controller is: " + result);
        var gasprice = cli.question('Enter gas price in gwei:');
        
        var yesno = cli.question('Enter Yes! to continue in '+environment+ ' with these parameters: ');
        if(yesno!='Yes!'){
            console.log('Not confirmed, stopping');
            process.exit(1);
        }

        deployed_proxy.changeProxiedController.sendTransaction(
            new_controller,
            {from: connection.address, gas: 40000, gasPrice: connection.web3.toWei(gasprice, 'gwei')},
            function(error, result){
                console.log(error, result);
                if(result) {
                    connection.close();
                    console.log('Done.');
                }
            }
        );

    }
});
