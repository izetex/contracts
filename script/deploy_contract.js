
const Connection = require('./eth_connection');

const mnemonics = 'gesture brush few side step photo upper valve spider concert child seed';

var connection = new Connection(mnemonics, 'ropsten');

console.log( "Creator address is: "+connection.address);

connection.web3.eth.getBalance(connection.address, function(error,result){
                if(error){
                    console.log('Error '+error);
                    exit();
                }else{
                    console.log( "Creator balance is: "+connection.web3.fromWei(result.toNumber()) + 'ETH' );
                }

            }
    );


connection.close();