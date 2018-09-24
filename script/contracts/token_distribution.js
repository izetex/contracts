module.exports = {


    metadata: {"compiler":{"version":"0.4.18+commit.9cf6e910"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_tokens","type":"uint256[]"}],"name":"distributeTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tokenAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"devdoc":{"methods":{"changeOwner(address)":{"params":{"_newOwner":"The address of the new owner. 0x0 can be used to create  an unowned neutral vault, however that cannot be undone"}}}},"userdoc":{"methods":{"changeOwner(address)":{"notice":"`owner` can step down and assign some other address to this role"}}}},"settings":{"compilationTarget":{"browser/TokenDistribution.sol":"TokenDistribution"},"libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"browser/TokenDistribution.sol":{"keccak256":"0x737311c5829f1716f1d003995ce209f8b79d0f02f07ff94ab515b899386fea7d","urls":["bzzr://05a5231d33cd95174b47a9dbd232a9fbd6356dd27f27df114a9bf6470960d052"]}},"version":1},
    bytecode: '0x6060604052341561000f57600080fd5b60405160208061059783398101604052808051906020019091905050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506104db806100bc6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634bd09c2a1461006757806355a373d6146101015780638da5cb5b14610156578063a6f9dae1146101ab575b600080fd5b341561007257600080fd5b6100ff600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919050506101e4565b005b341561010c57600080fd5b6101146103c6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016157600080fd5b6101696103ec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101b657600080fd5b6101e2600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610411565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561024157600080fd5b8151835114151561025157600080fd5b600090505b82518110156103c157600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3085848151811015156102ac57fe5b9060200190602002015185858151811015156102c457fe5b906020019060200201516000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561038e57600080fd5b6102c65a03f1151561039f57600080fd5b5050506040518051905015156103b457600080fd5b8080600101915050610256565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046c57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a7230582079a0f6d177c5609e1b3bff34eb73bcc778d0f3588bb8ce43f6d73d092ae18df70029',
    abi: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_owners",
                    "type": "address[]"
                },
                {
                    "name": "_tokens",
                    "type": "uint256[]"
                }
            ],
            "name": "distributeTokens",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "tokenContract",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newOwner",
                    "type": "address"
                }
            ],
            "name": "changeOwner",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
    ],
    gas: 470000
};
