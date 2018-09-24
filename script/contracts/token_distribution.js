module.exports = {


    metadata: {"compiler":{"version":"0.4.18+commit.9cf6e910"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_tokens","type":"uint256[]"}],"name":"distributeTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"}],"name":"TokenSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"devdoc":{"methods":{"changeOwner(address)":{"params":{"_newOwner":"The address of the new owner. 0x0 can be used to create  an unowned neutral vault, however that cannot be undone"}}}},"userdoc":{"methods":{"changeOwner(address)":{"notice":"`owner` can step down and assign some other address to this role"}}}},"settings":{"compilationTarget":{"browser/TokenDistribution.sol":"TokenDistribution"},"libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"browser/TokenDistribution.sol":{"keccak256":"0xb7715e56a8e067a9eea0b721e91e71614f88fa7ab9fcdb56eac4619ba6514d8a","urls":["bzzr://d311fb63e24799537e4187646c15e00c27cf12f1fd64dd4a1951e551718a557b"]}},"version":1},

    bytecode: '0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610563806100536000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634bd09c2a1461007257806355a373d61461010c5780637ebd89ee146101615780638da5cb5b1461019a578063a6f9dae1146101ef575b600080fd5b341561007d57600080fd5b61010a60048080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091905050610228565b005b341561011757600080fd5b61011f61040a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016c57600080fd5b610198600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610430565b005b34156101a557600080fd5b6101ad610474565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101fa57600080fd5b610226600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610499565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028557600080fd5b8151835114151561029557600080fd5b600090505b825181101561040557600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3085848151811015156102f057fe5b90602001906020020151858581518110151561030857fe5b906020019060200201516000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15156103d257600080fd5b6102c65a03f115156103e357600080fd5b5050506040518051905015156103f857600080fd5b808060010191505061029a565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104f457600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058208316310a59fca3c0989b46f1a6f57837df28fba6b157ee558663e5056164158c0029',
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
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address"
                }
            ],
            "name": "TokenSale",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
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
        }
    ],
    gas: 470000
};
