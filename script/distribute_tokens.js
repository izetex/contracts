const cli = require('readline-sync');
const Connection = require('./eth_connection');
const tokensale = require('./tokensale');
const request = require('request');

const environment = 'foundation'; // ropsten/foundation, change to foundation to deploy to real
var mnemonics = cli.question('Enter your mnemonics for '+environment+' account:');
var connection = new Connection(mnemonics, environment);

var deployed_tokensale = connection.web3.eth.contract(tokensale.abi).at(connection.config.tokensale);


var transfers = {
    '0xEF34280050E8546D8E1d85EC75250149553fB396': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB397': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB398': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB316': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB326': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB336': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB346': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB356': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB366': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB376': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB386': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB3A6': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB3B6': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB3C6': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB3D6': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB3E6': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB3F6': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB496': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB596': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB696': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB796': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB896': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fB996': 1.22,
    '0xEF34280050E8546D8E1d85EC75250149553fBA96': 1.22
};

var addresses = [];
var amounts = [];

for (var adr in transfers) {
    addresses.push(adr);
    amounts.push(transfers[adr] * 1000000000000000000)
}
var total = amounts.reduce(function(a, b) { return a + b; }, 0)

console.log( "Batch transactions: "+ addresses.length + ', total amount '+ total/1000000000000000000 + ' ETH');

var yesno = cli.question('Enter Yes! to change rate in environment: ');
if(yesno!='Yes!'){
    console.log('Not confirmed, stopping');
    process.exit(1);
}

deployed_tokensale.distributeTokens(addresses, amounts, {from: connection.address, gas: 33000*(addresses.length+1)},
    function(error,result){
        console.log(error, result);
        if(result) {
            connection.close();
            console.log('Done.');
        }
    }
);

