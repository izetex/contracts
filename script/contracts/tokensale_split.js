module.exports = {


    metadata: {"compiler":{"version":"0.4.18+commit.9cf6e910"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[],"name":"exchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"vaultAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"onTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_tokens","type":"uint256[]"}],"name":"distributeTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newVaultAddress","type":"address"}],"name":"setVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalTokenCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transfersAllowed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startFundingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"onApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_exchangeRate","type":"uint256"}],"name":"setExchangeRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endFundingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_allow","type":"bool"}],"name":"setTransfersAllowed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"proxyPayment","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_startFundingTime","type":"uint256"},{"name":"_endFundingTime","type":"uint256"},{"name":"_tokenCap","type":"uint256"},{"name":"_vaultAddress","type":"address"},{"name":"_tokenAddress","type":"address"},{"name":"_transfersAllowed","type":"bool"},{"name":"_exchangeRate","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}],"devdoc":{"methods":{"changeController(address)":{"params":{"_newController":"- controller to be used with token"}},"changeOwner(address)":{"params":{"_newOwner":"The address of the new owner. 0x0 can be used to create  an unowned neutral vault, however that cannot be undone"}},"onApprove(address,address,uint256)":{"params":{"_amount":"The amount in the `approve()` call","_owner":"The address that calls `approve()`","_spender":"The spender in the `approve()` call"},"return":"False if the controller does not authorize the approval"},"onTransfer(address,address,uint256)":{"params":{"_amount":"The amount of the transfer","_from":"The origin of the transfer","_to":"The destination of the transfer"},"return":"False if the controller does not authorize the transfer"},"proxyPayment(address)":{"params":{"_owner":"The address that will hold the newly created tokens"}},"setExchangeRate(uint256)":{"params":{"_exchangeRate":"USD/ETH rate * 100"}},"setTransfersAllowed(bool)":{"params":{"_allow":"allowing to transfer tokens"}},"setVault(address)":{"params":{"_newVaultAddress":"The address that will receive the ether sent to this token sale"}}}},"userdoc":{"methods":{"changeController(address)":{"notice":"`onlyOwner` changes the controller of the tokenContract"},"changeOwner(address)":{"notice":"`owner` can step down and assign some other address to this role"},"onApprove(address,address,uint256)":{"notice":"Notifies the controller about an approval, for this TokenSale all  approvals are allowed by default and no extra notifications are needed"},"onTransfer(address,address,uint256)":{"notice":"Notifies the controller about a transfer, for this TokenSale all  transfers are allowed by default and no extra notifications are needed"},"proxyPayment(address)":{"notice":"//////////////`proxyPayment()` allows the caller to send ether to the TokenSale and have the tokens created in an address of their choosing"},"setExchangeRate(uint256)":{"notice":"`onlyOwner` changes the exchange rate of token to ETH"},"setTransfersAllowed(bool)":{"notice":"`onlyOwner` changes the setting to allow transfer tokens"},"setVault(address)":{"notice":"`onlyOwner` changes the location that ether is sent"}}}},"settings":{"compilationTarget":{"browser/split.sol":"TokenSaleAfterSplit"},"libraries":{},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"browser/split.sol":{"keccak256":"0x49616192b5417339aa309c890bfd50a5269485a6d2ae95759fdd21d4f111a00e","urls":["bzzr://c190446c1023120c05c57aad754e7e9467ce689f0a8a4c5a0a1685a0d94cf741"]}},"version":1},
    bytecode:  "6060604052341561000f57600080fd5b60405160e0806109ae8339810160405280805191906020018051919060200180519190602001805191906020018051919060200180519190602001805160008054600160a060020a03191633600160a060020a031617905591505042861080159061007957508686115b801561008d5750600160a060020a03841615155b151561009857600080fd5b60019690965560029490945560039290925560068054600160a060020a03938416600160a060020a03199182161790915560078054941515740100000000000000000000000000000000000000000260a060020a60ff02199390941694909116939093171617905560085543600955610898806101166000396000f3006060604052600436106100f85763ffffffff60e060020a6000350416633ba0b9a981146101035780633cebb82314610128578063430bf08a146101475780634a393149146101765780634bd09c2a146101b257806355a373d6146102415780636817031b14610254578063764912ef146102735780638da5cb5b146102865780639cbf1b8514610299578063a6f9dae1146102ac578063b0660c3d146102cb578063b75ece9c146102de578063da682aeb14610176578063db068e0e146102f1578063dd54291b14610307578063e29eb8361461031a578063e4693e981461032d578063f3cd1c2814610340578063f48c305414610358575b6101013361036c565b005b341561010e57600080fd5b6101166104fe565b60405190815260200160405180910390f35b341561013357600080fd5b610101600160a060020a0360043516610504565b341561015257600080fd5b61015a610586565b604051600160a060020a03909116815260200160405180910390f35b341561018157600080fd5b61019e600160a060020a0360043581169060243516604435610595565b604051901515815260200160405180910390f35b34156101bd57600080fd5b6101016004602481358181019083013580602081810201604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496506105ba95505050505050565b341561024c57600080fd5b61015a6106ad565b341561025f57600080fd5b610101600160a060020a03600435166106bc565b341561027e57600080fd5b610116610706565b341561029157600080fd5b61015a61070c565b34156102a457600080fd5b61011661071b565b34156102b757600080fd5b610101600160a060020a0360043516610721565b34156102d657600080fd5b61019e61076b565b34156102e957600080fd5b61011661078c565b34156102fc57600080fd5b610101600435610792565b341561031257600080fd5b6101166107b6565b341561032557600080fd5b6101166107bc565b341561033857600080fd5b6101166107c2565b341561034b57600080fd5b61010160043515156107c8565b61019e600160a060020a0360043516610823565b6000600154421015801561038257506002544211155b80156103f85750600654600160a060020a031663f77c47916000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156103d157600080fd5b6102c65a03f115156103e257600080fd5b5050506040518051600160a060020a0316151590505b801561040357503415155b151561040e57600080fd5b61041a34600854610836565b905060035481600454011115151561043157600080fd5b6005805434908101909155600754600160a060020a031690616d6090604051600060405180830381858888f19350505050151561046d57600080fd5b600654600160a060020a031663827f32c0838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156104cc57600080fd5b6102c65a03f115156104dd57600080fd5b5050506040518051905015156104f257600080fd5b60048054820190555050565b60085481565b60005433600160a060020a0390811691161461051f57600080fd5b600654600160a060020a0316633cebb8238260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561056f57600080fd5b6102c65a03f1151561058057600080fd5b50505050565b600754600160a060020a031681565b505060075474010000000000000000000000000000000000000000900460ff16919050565b6000805433600160a060020a039081169116146105d657600080fd5b81518351146105e457600080fd5b5060005b82518110156106a857600654600160a060020a031663827f32c084838151811061060e57fe5b9060200190602002015184848151811061062457fe5b9060200190602002015160006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561067a57600080fd5b6102c65a03f1151561068b57600080fd5b5050506040518051905015156106a057600080fd5b6001016105e8565b505050565b600654600160a060020a031681565b60005433600160a060020a039081169116146106d757600080fd5b6007805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60045481565b600054600160a060020a031681565b60095481565b60005433600160a060020a0390811691161461073c57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60075474010000000000000000000000000000000000000000900460ff1681565b60015481565b60005433600160a060020a039081169116146107ad57600080fd5b60085543600955565b60035481565b60055481565b60025481565b60005433600160a060020a039081169116146107e357600080fd5b60078054911515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019909216919091179055565b600061082e8261036c565b506001919050565b6000808315156108495760009150610865565b5082820282848281151561085957fe5b041461086157fe5b8091505b50929150505600a165627a7a72305820a0a1c44d6d29f4049d9caa0175902298e4b4b18e9b35850ac70b854437bb59560029",
    abi: [
        {
            "constant": true,
            "inputs": [],
            "name": "exchangeRate",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
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
                    "name": "_newController",
                    "type": "address"
                }
            ],
            "name": "changeController",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "vaultAddress",
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
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "onTransfer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
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
                    "name": "_newVaultAddress",
                    "type": "address"
                }
            ],
            "name": "setVault",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalTokenCount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
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
            "constant": true,
            "inputs": [],
            "name": "exchangeRateAt",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
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
            "constant": true,
            "inputs": [],
            "name": "transfersAllowed",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "startFundingTime",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
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
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "onApprove",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_exchangeRate",
                    "type": "uint256"
                }
            ],
            "name": "setExchangeRate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "tokenCap",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalCollected",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "endFundingTime",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
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
                    "name": "_allow",
                    "type": "bool"
                }
            ],
            "name": "setTransfersAllowed",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "proxyPayment",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_startFundingTime",
                    "type": "uint256"
                },
                {
                    "name": "_endFundingTime",
                    "type": "uint256"
                },
                {
                    "name": "_tokenCap",
                    "type": "uint256"
                },
                {
                    "name": "_vaultAddress",
                    "type": "address"
                },
                {
                    "name": "_tokenAddress",
                    "type": "address"
                },
                {
                    "name": "_transfersAllowed",
                    "type": "bool"
                },
                {
                    "name": "_exchangeRate",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        }
    ],
    gas: 900000,
    constructor: '000000000000000000000000000000000000000000000000000000005aafd778000000000000000000000000000000000000000000000000000000005b37ef4f00000000000000000000000000000000000000000813f3978f89409844000000000000000000000000000000f4702b0918a8a89dfc38459ce42198834818f26b0000000000000000000000002ad180cbaffbc97237f572148fc1b283b68d88610000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d6fd'



};
