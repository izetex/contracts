const cli = require('readline-sync');
const Connection = require('./eth_connection');
const wallet = require('./contracts/wallet');

const environment = 'foundation'; // ropsten/foundation, change to foundation to deploy to real
var mnemonics = cli.question('Enter your mnemonics or pkey for '+environment+' account:');
var connection = new Connection(mnemonics, environment, true);


var deployed_wallet = connection.web3.eth.contract(wallet.abi).at(connection.config.vault);

var hash = cli.question('Enter hash (prefix with 0x) to confirm:');
var gasprice = cli.question('Enter gas price in gwei:');

var yesno = cli.question('Enter Yes! to continue in '+environment+ ' to '+deployed_wallet.address+' with these parameters: ');
if(yesno!='Yes!'){
    console.log('Not confirmed, stopping');
    process.exit(1);
}
console.log('confirming now...');


deployed_wallet.confirm.sendTransaction( hash, {from: connection.address,
                                        gas: 60000,
                                        gasPrice: connection.web3.toWei(gasprice, 'gwei')
                                    },
    function(error, result){
        console.log(error, result);
        if(result) {
            connection.close();
            console.log('Done.');
        }
    }
);
