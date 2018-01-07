module.exports = {
    "contractName": "ProxyController",
    "abi": [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_newController",
                    "type": "address"
                }
            ],
            "name": "changeProxiedController",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
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
                    "name": "_allow",
                    "type": "bool"
                }
            ],
            "name": "setTransfersToContractsAllowed",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "proxiedController",
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
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "generateTokens",
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
            "constant": true,
            "inputs": [],
            "name": "allowTransfersToContracts",
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
            "constant": false,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "destroyTokens",
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
                    "name": "_newController",
                    "type": "address"
                }
            ],
            "name": "changeTokenController",
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
                    "name": "_token",
                    "type": "address"
                }
            ],
            "name": "claimTokens",
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
                    "name": "_token",
                    "type": "address"
                },
                {
                    "name": "_controller",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
    ],
    "bytecode": "0x6060604052341561000f57600080fd5b6040516040806108b8833981016040528080519190602001805160008054600160a060020a03191633600160a060020a039081169190911790915590925083161515905061005c57600080fd5b60018054600160a060020a03938416600160a060020a03199182161790915560028054929093169116179055610821806100976000396000f3006060604052600436106100b65763ffffffff60e060020a6000350416633e90825281146100bb5780634a393149146100dc57806355a373d6146101185780636cebfbe61461014757806375141bab1461015f578063827f32c0146101725780638da5cb5b14610194578063a6f9dae1146101a7578063c9ca90f0146101c6578063d3ce77fe146101d9578063d6c8976b146101fb578063da682aeb1461021a578063df8de3e714610242578063f48c305414610261575b600080fd5b34156100c657600080fd5b6100da600160a060020a0360043516610275565b005b34156100e757600080fd5b610104600160a060020a03600435811690602435166044356102bf565b604051901515815260200160405180910390f35b341561012357600080fd5b61012b6103b0565b604051600160a060020a03909116815260200160405180910390f35b341561015257600080fd5b6100da60043515156103bf565b341561016a57600080fd5b61012b610409565b341561017d57600080fd5b610104600160a060020a0360043516602435610418565b341561019f57600080fd5b61012b6104b4565b34156101b257600080fd5b6100da600160a060020a03600435166104c3565b34156101d157600080fd5b61010461050d565b34156101e457600080fd5b610104600160a060020a036004351660243561051d565b341561020657600080fd5b6100da600160a060020a0360043516610598565b341561022557600080fd5b610104600160a060020a036004358116906024351660443561061a565b341561024d57600080fd5b6100da600160a060020a03600435166106c5565b610104600160a060020a0360043516610730565b60005433600160a060020a0390811691161461029057600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600090600160a060020a031615156102f95760025460a060020a900460ff16806102f257506102f0836107c8565b155b90506103a9565b600254600160a060020a0316634a39314985858560006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561036557600080fd5b6102c65a03f1151561037657600080fd5b505050604051805190501561038d575060016103a9565b60025460a060020a900460ff16806102f257506102f0836107c8565b9392505050565b600154600160a060020a031681565b60005433600160a060020a039081169116146103da57600080fd5b6002805491151560a060020a0274ff000000000000000000000000000000000000000019909216919091179055565b600254600160a060020a031681565b6000805433600160a060020a0390811691161461043457600080fd5b600154600160a060020a031663827f32c0848460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561049357600080fd5b6102c65a03f115156104a457600080fd5b5050506040518051949350505050565b600054600160a060020a031681565b60005433600160a060020a039081169116146104de57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60025460a060020a900460ff1681565b6000805433600160a060020a0390811691161461053957600080fd5b600154600160a060020a031663d3ce77fe848460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561049357600080fd5b60005433600160a060020a039081169116146105b357600080fd5b600154600160a060020a0316633cebb8238260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561060357600080fd5b6102c65a03f1151561061457600080fd5b50505050565b600254600090600160a060020a03161515610637575060016103a9565b600254600160a060020a031663da682aeb85858560006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b15156106a357600080fd5b6102c65a03f115156106b457600080fd5b5050506040518051905090506103a9565b60005433600160a060020a039081169116146106e057600080fd5b600154600160a060020a031663df8de3e78260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561060357600080fd5b600254600090600160a060020a0316151561074d575060006107c3565b600254600160a060020a031663f48c30548360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156107a657600080fd5b6102c65a03f115156107b757600080fd5b50505060405180519150505b919050565b600080600160a060020a03831615156107e457600091506107ef565b823b90506000811191505b509190505600a165627a7a723058200e315f59c756c3a1657dbc54006c29339623c1d38c22e440902ad72aab383ec20029",
    "deployedBytecode": "0x6060604052600436106100b65763ffffffff60e060020a6000350416633e90825281146100bb5780634a393149146100dc57806355a373d6146101185780636cebfbe61461014757806375141bab1461015f578063827f32c0146101725780638da5cb5b14610194578063a6f9dae1146101a7578063c9ca90f0146101c6578063d3ce77fe146101d9578063d6c8976b146101fb578063da682aeb1461021a578063df8de3e714610242578063f48c305414610261575b600080fd5b34156100c657600080fd5b6100da600160a060020a0360043516610275565b005b34156100e757600080fd5b610104600160a060020a03600435811690602435166044356102bf565b604051901515815260200160405180910390f35b341561012357600080fd5b61012b6103b0565b604051600160a060020a03909116815260200160405180910390f35b341561015257600080fd5b6100da60043515156103bf565b341561016a57600080fd5b61012b610409565b341561017d57600080fd5b610104600160a060020a0360043516602435610418565b341561019f57600080fd5b61012b6104b4565b34156101b257600080fd5b6100da600160a060020a03600435166104c3565b34156101d157600080fd5b61010461050d565b34156101e457600080fd5b610104600160a060020a036004351660243561051d565b341561020657600080fd5b6100da600160a060020a0360043516610598565b341561022557600080fd5b610104600160a060020a036004358116906024351660443561061a565b341561024d57600080fd5b6100da600160a060020a03600435166106c5565b610104600160a060020a0360043516610730565b60005433600160a060020a0390811691161461029057600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600090600160a060020a031615156102f95760025460a060020a900460ff16806102f257506102f0836107c8565b155b90506103a9565b600254600160a060020a0316634a39314985858560006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561036557600080fd5b6102c65a03f1151561037657600080fd5b505050604051805190501561038d575060016103a9565b60025460a060020a900460ff16806102f257506102f0836107c8565b9392505050565b600154600160a060020a031681565b60005433600160a060020a039081169116146103da57600080fd5b6002805491151560a060020a0274ff000000000000000000000000000000000000000019909216919091179055565b600254600160a060020a031681565b6000805433600160a060020a0390811691161461043457600080fd5b600154600160a060020a031663827f32c0848460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561049357600080fd5b6102c65a03f115156104a457600080fd5b5050506040518051949350505050565b600054600160a060020a031681565b60005433600160a060020a039081169116146104de57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60025460a060020a900460ff1681565b6000805433600160a060020a0390811691161461053957600080fd5b600154600160a060020a031663d3ce77fe848460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561049357600080fd5b60005433600160a060020a039081169116146105b357600080fd5b600154600160a060020a0316633cebb8238260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561060357600080fd5b6102c65a03f1151561061457600080fd5b50505050565b600254600090600160a060020a03161515610637575060016103a9565b600254600160a060020a031663da682aeb85858560006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b15156106a357600080fd5b6102c65a03f115156106b457600080fd5b5050506040518051905090506103a9565b60005433600160a060020a039081169116146106e057600080fd5b600154600160a060020a031663df8de3e78260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561060357600080fd5b600254600090600160a060020a0316151561074d575060006107c3565b600254600160a060020a031663f48c30548360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156107a657600080fd5b6102c65a03f115156107b757600080fd5b50505060405180519150505b919050565b600080600160a060020a03831615156107e457600091506107ef565b823b90506000811191505b509190505600a165627a7a723058200e315f59c756c3a1657dbc54006c29339623c1d38c22e440902ad72aab383ec20029",
    "sourceMap": "265:4889:2:-;;;522:224;;;;;;;;;;;;;;;;;;;;;;;;;;;;408:5:4;:18;;-1:-1:-1;;;;;;408:18:4;416:10;-1:-1:-1;;;;;408:18:4;;;;;;;;;;522:224:2;;-1:-1:-1;610:20:2;;;;;-1:-1:-1;602:29:2;;;;;;642:13;:39;;-1:-1:-1;;;;;642:39:2;;;-1:-1:-1;;;;;;642:39:2;;;;;;;691:17;:48;;;;;;;;;;;265:4889;;;;;;",
    "deployedSourceMap": "265:4889:2:-;;;;;;;;;-1:-1:-1;;;265:4889:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2329:142;;;;;;;;;;-1:-1:-1;;;;;2329:142:2;;;;;;;4076:384;;;;;;;;;;-1:-1:-1;;;;;4076:384:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;323:36;;;;;;;;;;;;;;;-1:-1:-1;;;;;323:36:2;;;;;;;;;;;;;;2639:121;;;;;;;;;;;;;;;;391:40;;;;;;;;;;;;1301:156;;;;;;;;;;-1:-1:-1;;;;;1301:156:2;;;;;;;289:20:4;;;;;;;;;;;;661:85;;;;;;;;;;-1:-1:-1;;;;;661:85:4;;;;;467:48:2;;;;;;;;;;;;1698:154;;;;;;;;;;-1:-1:-1;;;;;1698:154:2;;;;;;;889:135;;;;;;;;;;-1:-1:-1;;;;;889:135:2;;;;;4875:275;;;;;;;;;;-1:-1:-1;;;;;4875:275:2;;;;;;;;;;;;2096:111;;;;;;;;;;-1:-1:-1;;;;;2096:111:2;;;;;3461:227;;-1:-1:-1;;;;;3461:227:2;;;;;2329:142;271:5:4;;257:10;-1:-1:-1;;;;;257:19:4;;;271:5;;257:19;248:29;;;;;;2413:17:2;:51;;-1:-1:-1;;2413:51:2;-1:-1:-1;;;;;2413:51:2;;;;;;;;;;2329:142::o;4076:384::-;4172:17;;4153:4;;-1:-1:-1;;;;;4172:17:2;:29;4169:285;;;4223:25;;-1:-1:-1;;;4223:25:2;;;;;:45;;;4253:15;4264:3;4253:10;:15::i;:::-;4252:16;4223:45;4216:52;;;;4169:285;4287:17;;-1:-1:-1;;;;;4287:17:2;:28;4316:5;4323:3;4328:7;4287:17;:49;;;;;;;-1:-1:-1;;;4287:49:2;;;;;;-1:-1:-1;;;;;4287:49:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4284:170;;;-1:-1:-1;4358:4:2;4351:11;;4284:170;4398:25;;-1:-1:-1;;;4398:25:2;;;;;:45;;;4428:15;4439:3;4428:10;:15::i;4284:170::-;4076:384;;;;;:::o;323:36::-;;;-1:-1:-1;;;;;323:36:2;;:::o;2639:121::-;271:5:4;;257:10;-1:-1:-1;;;;;257:19:4;;;271:5;;257:19;248:29;;;;;;2719:25:2;:34;;;;;-1:-1:-1;;;2719:34:2;-1:-1:-1;;2719:34:2;;;;;;;;;2639:121::o;391:40::-;;;-1:-1:-1;;;;;391:40:2;;:::o;1301:156::-;1382:4;271:5:4;;257:10;-1:-1:-1;;;;;257:19:4;;;271:5;;257:19;248:29;;;;;;1405:13:2;;-1:-1:-1;;;;;1405:13:2;:28;1434:6;1442:7;1405:13;:45;;;;;;;-1:-1:-1;;;1405:45:2;;;;;;-1:-1:-1;;;;;1405:45:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1301:156;-1:-1:-1;;;;1301:156:2:o;289:20:4:-;;;-1:-1:-1;;;;;289:20:4;;:::o;661:85::-;271:5;;257:10;-1:-1:-1;;;;;257:19:4;;;271:5;;257:19;248:29;;;;;;722:5;:17;;-1:-1:-1;;722:17:4;-1:-1:-1;;;;;722:17:4;;;;;;;;;;661:85::o;467:48:2:-;;;-1:-1:-1;;;467:48:2;;;;;:::o;1698:154::-;1778:4;271:5:4;;257:10;-1:-1:-1;;;;;257:19:4;;;271:5;;257:19;248:29;;;;;;1801:13:2;;-1:-1:-1;;;;;1801:13:2;:27;1829:6;1837:7;1801:13;:44;;;;;;;-1:-1:-1;;;1801:44:2;;;;;;-1:-1:-1;;;;;1801:44:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;889:135;271:5:4;;257:10;-1:-1:-1;;;;;257:19:4;;;271:5;;257:19;248:29;;;;;;971:13:2;;-1:-1:-1;;;;;971:13:2;:30;1002:14;971:46;;-1:-1:-1;;;971:46:2;;;;;;-1:-1:-1;;;;;971:46:2;;;;;;;;;-1:-1:-1;971:46:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;889:135;:::o;4875:275::-;4988:17;;4965:4;;-1:-1:-1;;;;;4988:17:2;:29;4985:159;;;-1:-1:-1;5039:4:2;5032:11;;4985:159;5079:17;;-1:-1:-1;;;;;5079:17:2;:27;5107:6;5115:8;5125:7;5079:17;:54;;;;;;;-1:-1:-1;;;5079:54:2;;;;;;-1:-1:-1;;;;;5079:54:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5072:61;;;;2096:111;271:5:4;;257:10;-1:-1:-1;;;;;257:19:4;;;271:5;;257:19;248:29;;;;;;2167:13:2;;-1:-1:-1;;;;;2167:13:2;:25;2193:6;2167:33;;-1:-1:-1;;;2167:33:2;;;;;;-1:-1:-1;;;;;2167:33:2;;;;;;;;;-1:-1:-1;2167:33:2;;;;;;;;;;;;;;;;;3461:227;3541:17;;3522:4;;-1:-1:-1;;;;;3541:17:2;:29;3538:144;;;-1:-1:-1;3592:5:2;3585:12;;3538:144;3633:17;;-1:-1:-1;;;;;3633:17:2;:30;3664:6;3633:17;:38;;;;;;;-1:-1:-1;;;3633:38:2;;;;;;-1:-1:-1;;;;;3633:38:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3538:144:2;3461:227;;;:::o;2931:222::-;2992:4;;-1:-1:-1;;;;;3031:10:2;;;3027:28;;;3050:5;3043:12;;;;3027:28;3108:5;3096:11;3088:26;;3145:1;3140:4;:6;3133:13;;2931:222;;;;;:::o",
    "source": "pragma solidity ^0.4.11;\n\nimport \"../util/Owned.sol\";\nimport \"../token/ControlledToken.sol\";\n\n/**\n * @title ProxyController\n * @dev ProxyController allows to change a controller for the token without modifying it.\n *\n * @author Aleksey Studnev <studnev@izx.io>\n */\ncontract ProxyController is Owned, TokenController {\n\n    ControlledToken public tokenContract;       // token controlled\n    TokenController public proxiedController;   // controller being proxied\n    bool            public allowTransfersToContracts;\n\n    function ProxyController(address _token, address _controller) public {\n\n        require(_token != address(0));\n\n        tokenContract = ControlledToken(_token);\n        proxiedController = TokenController(_controller);\n    }\n\n    /// @notice `onlyOwner` changes the controller of the tokenContract\n    /// @param _newController - controller to be used with token\n    function changeTokenController(address _newController) onlyOwner public {\n        tokenContract.changeController(_newController);\n    }\n\n    /// @notice `onlyOwner` generates `_amount` tokens that are assigned to `_owner`\n    /// @param _owner The address that will be assigned the new tokens\n    /// @param _amount The quantity of tokens generated\n    /// @return True if the tokens are generated correctly\n    function generateTokens(address _owner, uint _amount ) onlyOwner public returns (bool) {\n        return tokenContract.generateTokens(_owner, _amount);\n    }\n\n    /// @notice `onlyOwner` Burns `_amount` tokens from `_owner`\n    /// @param _owner The address that will lose the tokens\n    /// @param _amount The quantity of tokens to burn\n    /// @return True if the tokens are burned correctly\n    function destroyTokens(address _owner, uint _amount ) onlyOwner public returns (bool) {\n        return tokenContract.destroyTokens(_owner, _amount);\n    }\n\n    /// @notice  `onlyOwner`  can use by controller to extract mistakenly sent tokens to this contract.\n    /// @param _token The address of the token contract that you want to recover\n    ///  set to 0 in case you want to extract ether.\n    function claimTokens(address _token) onlyOwner public {\n        return tokenContract.claimTokens(_token);\n    }\n\n    /// @notice `onlyOwner` changes the proxied controller\n    /// @param _newController - controller to be proxied\n    function changeProxiedController(address _newController) onlyOwner public {\n        proxiedController = TokenController(_newController);\n    }\n\n    /// @notice `onlyOwner` changes the setting to allow transfer tokens to other contracts\n    /// @param _allow  allowing to transfer tokens to other contracts\n    function setTransfersToContractsAllowed(bool _allow) onlyOwner public {\n        allowTransfersToContracts = _allow;\n    }\n\n    /// @dev Internal function to determine if an address is a contract\n    /// @param _addr The address being queried\n    /// @return True if `_addr` is a contract\n    function isContract(address _addr) constant internal returns(bool) {\n        uint size;\n        if (_addr == 0) return false;\n        assembly {\n            size := extcodesize(_addr)\n        }\n        return size>0;\n    }\n\n    /////////////////\n    // TokenController interface\n    /////////////////\n\n    /// @notice `proxyPayment()` allows the caller to send ether to the TokenSale and\n    /// have the tokens created in an address of their choosing\n    /// @param _owner The address that will hold the newly created tokens\n    function proxyPayment(address _owner) payable public returns(bool) {\n        if(proxiedController==address(0)){\n            return false;\n        }else{\n            return proxiedController.proxyPayment(_owner);\n        }\n    }\n\n    /// @notice Notifies the controller about a transfer, for this TokenSale all\n    ///  transfers are allowed by default and no extra notifications are needed\n    /// @param _from The origin of the transfer\n    /// @param _to The destination of the transfer\n    /// @param _amount The amount of the transfer\n    /// @return False if the controller does not authorize the transfer\n    function onTransfer(address _from, address _to, uint _amount) public returns(bool) {\n        if(proxiedController==address(0)){\n            return allowTransfersToContracts || !isContract(_to);\n        }else if(proxiedController.onTransfer(_from, _to, _amount)){\n            return true;\n        }else{\n            return allowTransfersToContracts || !isContract(_to);\n        }\n    }\n\n    /// @notice Notifies the controller about an approval, for this TokenSale all\n    ///  approvals are allowed by default and no extra notifications are needed\n    /// @param _owner The address that calls `approve()`\n    /// @param _spender The spender in the `approve()` call\n    /// @param _amount The amount in the `approve()` call\n    /// @return False if the controller does not authorize the approval\n    function onApprove(address _owner, address _spender, uint _amount) public\n        returns(bool)\n    {\n        if(proxiedController==address(0)){\n            return true;\n        }else{\n            return proxiedController.onApprove(_owner, _spender, _amount);\n        }\n    }\n\n\n}",
    "sourcePath": "/Users/studnev/dev4bc/contracts/contracts/token/ProxyController.sol",
    "ast": {
        "attributes": {
            "absolutePath": "/Users/studnev/dev4bc/contracts/contracts/token/ProxyController.sol",
            "exportedSymbols": {
                "ProxyController": [
                    816
                ]
            }
        },
        "children": [
            {
                "attributes": {
                    "literals": [
                        "solidity",
                        "^",
                        "0.4",
                        ".11"
                    ]
                },
                "id": 568,
                "name": "PragmaDirective",
                "src": "0:24:2"
            },
            {
                "attributes": {
                    "SourceUnit": 921,
                    "absolutePath": "/Users/studnev/dev4bc/contracts/contracts/util/Owned.sol",
                    "file": "../util/Owned.sol",
                    "scope": 817,
                    "symbolAliases": [
                        null
                    ],
                    "unitAlias": ""
                },
                "id": 569,
                "name": "ImportDirective",
                "src": "26:27:2"
            },
            {
                "attributes": {
                    "SourceUnit": 503,
                    "absolutePath": "/Users/studnev/dev4bc/contracts/contracts/token/ControlledToken.sol",
                    "file": "../token/ControlledToken.sol",
                    "scope": 817,
                    "symbolAliases": [
                        null
                    ],
                    "unitAlias": ""
                },
                "id": 570,
                "name": "ImportDirective",
                "src": "54:38:2"
            },
            {
                "attributes": {
                    "contractDependencies": [
                        848,
                        920
                    ],
                    "contractKind": "contract",
                    "documentation": "@title ProxyController\n@dev ProxyController allows to change a controller for the token without modifying it.\n * @author Aleksey Studnev <studnev@izx.io>",
                    "fullyImplemented": true,
                    "linearizedBaseContracts": [
                        816,
                        848,
                        920
                    ],
                    "name": "ProxyController",
                    "scope": 817
                },
                "children": [
                    {
                        "attributes": {
                            "arguments": [
                                null
                            ]
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "Owned",
                                    "referencedDeclaration": 920,
                                    "type": "contract Owned"
                                },
                                "id": 571,
                                "name": "UserDefinedTypeName",
                                "src": "293:5:2"
                            }
                        ],
                        "id": 572,
                        "name": "InheritanceSpecifier",
                        "src": "293:5:2"
                    },
                    {
                        "attributes": {
                            "arguments": [
                                null
                            ]
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "TokenController",
                                    "referencedDeclaration": 848,
                                    "type": "contract TokenController"
                                },
                                "id": 573,
                                "name": "UserDefinedTypeName",
                                "src": "300:15:2"
                            }
                        ],
                        "id": 574,
                        "name": "InheritanceSpecifier",
                        "src": "300:15:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "tokenContract",
                            "scope": 816,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "contract ControlledToken",
                            "value": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "ControlledToken",
                                    "referencedDeclaration": 502,
                                    "type": "contract ControlledToken"
                                },
                                "id": 575,
                                "name": "UserDefinedTypeName",
                                "src": "323:15:2"
                            }
                        ],
                        "id": 576,
                        "name": "VariableDeclaration",
                        "src": "323:36:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "proxiedController",
                            "scope": 816,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "contract TokenController",
                            "value": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "TokenController",
                                    "referencedDeclaration": 848,
                                    "type": "contract TokenController"
                                },
                                "id": 577,
                                "name": "UserDefinedTypeName",
                                "src": "391:15:2"
                            }
                        ],
                        "id": 578,
                        "name": "VariableDeclaration",
                        "src": "391:40:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "allowTransfersToContracts",
                            "scope": 816,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "bool",
                                    "type": "bool"
                                },
                                "id": 579,
                                "name": "ElementaryTypeName",
                                "src": "467:4:2"
                            }
                        ],
                        "id": 580,
                        "name": "VariableDeclaration",
                        "src": "467:48:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": true,
                            "modifiers": [
                                null
                            ],
                            "name": "ProxyController",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_token",
                                            "scope": 608,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 581,
                                                "name": "ElementaryTypeName",
                                                "src": "547:7:2"
                                            }
                                        ],
                                        "id": 582,
                                        "name": "VariableDeclaration",
                                        "src": "547:14:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_controller",
                                            "scope": 608,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 583,
                                                "name": "ElementaryTypeName",
                                                "src": "563:7:2"
                                            }
                                        ],
                                        "id": 584,
                                        "name": "VariableDeclaration",
                                        "src": "563:19:2"
                                    }
                                ],
                                "id": 585,
                                "name": "ParameterList",
                                "src": "546:37:2"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 586,
                                "name": "ParameterList",
                                "src": "591:0:2"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 935,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 587,
                                                        "name": "Identifier",
                                                        "src": "602:7:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "operator": "!=",
                                                            "type": "bool"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 582,
                                                                    "type": "address",
                                                                    "value": "_token"
                                                                },
                                                                "id": 588,
                                                                "name": "Identifier",
                                                                "src": "610:6:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "isStructConstructorCall": false,
                                                                    "lValueRequested": false,
                                                                    "names": [
                                                                        null
                                                                    ],
                                                                    "type": "address",
                                                                    "type_conversion": true
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                }
                                                                            ],
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "type": "type(address)",
                                                                            "value": "address"
                                                                        },
                                                                        "id": 589,
                                                                        "name": "ElementaryTypeNameExpression",
                                                                        "src": "620:7:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "hexvalue": "30",
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "subdenomination": null,
                                                                            "token": "number",
                                                                            "type": "int_const 0",
                                                                            "value": "0"
                                                                        },
                                                                        "id": 590,
                                                                        "name": "Literal",
                                                                        "src": "628:1:2"
                                                                    }
                                                                ],
                                                                "id": 591,
                                                                "name": "FunctionCall",
                                                                "src": "620:10:2"
                                                            }
                                                        ],
                                                        "id": 592,
                                                        "name": "BinaryOperation",
                                                        "src": "610:20:2"
                                                    }
                                                ],
                                                "id": 593,
                                                "name": "FunctionCall",
                                                "src": "602:29:2"
                                            }
                                        ],
                                        "id": 594,
                                        "name": "ExpressionStatement",
                                        "src": "602:29:2"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "contract ControlledToken"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 576,
                                                            "type": "contract ControlledToken",
                                                            "value": "tokenContract"
                                                        },
                                                        "id": 595,
                                                        "name": "Identifier",
                                                        "src": "642:13:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "contract ControlledToken",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 502,
                                                                    "type": "type(contract ControlledToken)",
                                                                    "value": "ControlledToken"
                                                                },
                                                                "id": 596,
                                                                "name": "Identifier",
                                                                "src": "658:15:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 582,
                                                                    "type": "address",
                                                                    "value": "_token"
                                                                },
                                                                "id": 597,
                                                                "name": "Identifier",
                                                                "src": "674:6:2"
                                                            }
                                                        ],
                                                        "id": 598,
                                                        "name": "FunctionCall",
                                                        "src": "658:23:2"
                                                    }
                                                ],
                                                "id": 599,
                                                "name": "Assignment",
                                                "src": "642:39:2"
                                            }
                                        ],
                                        "id": 600,
                                        "name": "ExpressionStatement",
                                        "src": "642:39:2"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "contract TokenController"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 578,
                                                            "type": "contract TokenController",
                                                            "value": "proxiedController"
                                                        },
                                                        "id": 601,
                                                        "name": "Identifier",
                                                        "src": "691:17:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "contract TokenController",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 848,
                                                                    "type": "type(contract TokenController)",
                                                                    "value": "TokenController"
                                                                },
                                                                "id": 602,
                                                                "name": "Identifier",
                                                                "src": "711:15:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 584,
                                                                    "type": "address",
                                                                    "value": "_controller"
                                                                },
                                                                "id": 603,
                                                                "name": "Identifier",
                                                                "src": "727:11:2"
                                                            }
                                                        ],
                                                        "id": 604,
                                                        "name": "FunctionCall",
                                                        "src": "711:28:2"
                                                    }
                                                ],
                                                "id": 605,
                                                "name": "Assignment",
                                                "src": "691:48:2"
                                            }
                                        ],
                                        "id": 606,
                                        "name": "ExpressionStatement",
                                        "src": "691:48:2"
                                    }
                                ],
                                "id": 607,
                                "name": "Block",
                                "src": "591:155:2"
                            }
                        ],
                        "id": 608,
                        "name": "FunctionDefinition",
                        "src": "522:224:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "changeTokenController",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_newController",
                                            "scope": 622,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 609,
                                                "name": "ElementaryTypeName",
                                                "src": "920:7:2"
                                            }
                                        ],
                                        "id": 610,
                                        "name": "VariableDeclaration",
                                        "src": "920:22:2"
                                    }
                                ],
                                "id": 611,
                                "name": "ParameterList",
                                "src": "919:24:2"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 614,
                                "name": "ParameterList",
                                "src": "961:0:2"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 896,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 612,
                                        "name": "Identifier",
                                        "src": "944:9:2"
                                    }
                                ],
                                "id": 613,
                                "name": "ModifierInvocation",
                                "src": "944:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "changeController",
                                                            "referencedDeclaration": 882,
                                                            "type": "function (address) external"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 576,
                                                                    "type": "contract ControlledToken",
                                                                    "value": "tokenContract"
                                                                },
                                                                "id": 615,
                                                                "name": "Identifier",
                                                                "src": "971:13:2"
                                                            }
                                                        ],
                                                        "id": 617,
                                                        "name": "MemberAccess",
                                                        "src": "971:30:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 610,
                                                            "type": "address",
                                                            "value": "_newController"
                                                        },
                                                        "id": 618,
                                                        "name": "Identifier",
                                                        "src": "1002:14:2"
                                                    }
                                                ],
                                                "id": 619,
                                                "name": "FunctionCall",
                                                "src": "971:46:2"
                                            }
                                        ],
                                        "id": 620,
                                        "name": "ExpressionStatement",
                                        "src": "971:46:2"
                                    }
                                ],
                                "id": 621,
                                "name": "Block",
                                "src": "961:63:2"
                            }
                        ],
                        "id": 622,
                        "name": "FunctionDefinition",
                        "src": "889:135:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "generateTokens",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_owner",
                                            "scope": 640,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 623,
                                                "name": "ElementaryTypeName",
                                                "src": "1325:7:2"
                                            }
                                        ],
                                        "id": 624,
                                        "name": "VariableDeclaration",
                                        "src": "1325:14:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_amount",
                                            "scope": 640,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 625,
                                                "name": "ElementaryTypeName",
                                                "src": "1341:4:2"
                                            }
                                        ],
                                        "id": 626,
                                        "name": "VariableDeclaration",
                                        "src": "1341:12:2"
                                    }
                                ],
                                "id": 627,
                                "name": "ParameterList",
                                "src": "1324:31:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 640,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bool",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bool",
                                                    "type": "bool"
                                                },
                                                "id": 630,
                                                "name": "ElementaryTypeName",
                                                "src": "1382:4:2"
                                            }
                                        ],
                                        "id": 631,
                                        "name": "VariableDeclaration",
                                        "src": "1382:4:2"
                                    }
                                ],
                                "id": 632,
                                "name": "ParameterList",
                                "src": "1381:6:2"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 896,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 628,
                                        "name": "Identifier",
                                        "src": "1356:9:2"
                                    }
                                ],
                                "id": 629,
                                "name": "ModifierInvocation",
                                "src": "1356:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 632
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "bool",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "generateTokens",
                                                            "referencedDeclaration": 342,
                                                            "type": "function (address,uint256) external returns (bool)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 576,
                                                                    "type": "contract ControlledToken",
                                                                    "value": "tokenContract"
                                                                },
                                                                "id": 633,
                                                                "name": "Identifier",
                                                                "src": "1405:13:2"
                                                            }
                                                        ],
                                                        "id": 634,
                                                        "name": "MemberAccess",
                                                        "src": "1405:28:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 624,
                                                            "type": "address",
                                                            "value": "_owner"
                                                        },
                                                        "id": 635,
                                                        "name": "Identifier",
                                                        "src": "1434:6:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 626,
                                                            "type": "uint256",
                                                            "value": "_amount"
                                                        },
                                                        "id": 636,
                                                        "name": "Identifier",
                                                        "src": "1442:7:2"
                                                    }
                                                ],
                                                "id": 637,
                                                "name": "FunctionCall",
                                                "src": "1405:45:2"
                                            }
                                        ],
                                        "id": 638,
                                        "name": "Return",
                                        "src": "1398:52:2"
                                    }
                                ],
                                "id": 639,
                                "name": "Block",
                                "src": "1388:69:2"
                            }
                        ],
                        "id": 640,
                        "name": "FunctionDefinition",
                        "src": "1301:156:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "destroyTokens",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_owner",
                                            "scope": 658,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 641,
                                                "name": "ElementaryTypeName",
                                                "src": "1721:7:2"
                                            }
                                        ],
                                        "id": 642,
                                        "name": "VariableDeclaration",
                                        "src": "1721:14:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_amount",
                                            "scope": 658,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 643,
                                                "name": "ElementaryTypeName",
                                                "src": "1737:4:2"
                                            }
                                        ],
                                        "id": 644,
                                        "name": "VariableDeclaration",
                                        "src": "1737:12:2"
                                    }
                                ],
                                "id": 645,
                                "name": "ParameterList",
                                "src": "1720:31:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 658,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bool",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bool",
                                                    "type": "bool"
                                                },
                                                "id": 648,
                                                "name": "ElementaryTypeName",
                                                "src": "1778:4:2"
                                            }
                                        ],
                                        "id": 649,
                                        "name": "VariableDeclaration",
                                        "src": "1778:4:2"
                                    }
                                ],
                                "id": 650,
                                "name": "ParameterList",
                                "src": "1777:6:2"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 896,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 646,
                                        "name": "Identifier",
                                        "src": "1752:9:2"
                                    }
                                ],
                                "id": 647,
                                "name": "ModifierInvocation",
                                "src": "1752:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 650
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "bool",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "destroyTokens",
                                                            "referencedDeclaration": 398,
                                                            "type": "function (address,uint256) external returns (bool)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 576,
                                                                    "type": "contract ControlledToken",
                                                                    "value": "tokenContract"
                                                                },
                                                                "id": 651,
                                                                "name": "Identifier",
                                                                "src": "1801:13:2"
                                                            }
                                                        ],
                                                        "id": 652,
                                                        "name": "MemberAccess",
                                                        "src": "1801:27:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 642,
                                                            "type": "address",
                                                            "value": "_owner"
                                                        },
                                                        "id": 653,
                                                        "name": "Identifier",
                                                        "src": "1829:6:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 644,
                                                            "type": "uint256",
                                                            "value": "_amount"
                                                        },
                                                        "id": 654,
                                                        "name": "Identifier",
                                                        "src": "1837:7:2"
                                                    }
                                                ],
                                                "id": 655,
                                                "name": "FunctionCall",
                                                "src": "1801:44:2"
                                            }
                                        ],
                                        "id": 656,
                                        "name": "Return",
                                        "src": "1794:51:2"
                                    }
                                ],
                                "id": 657,
                                "name": "Block",
                                "src": "1784:68:2"
                            }
                        ],
                        "id": 658,
                        "name": "FunctionDefinition",
                        "src": "1698:154:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "claimTokens",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_token",
                                            "scope": 671,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 659,
                                                "name": "ElementaryTypeName",
                                                "src": "2117:7:2"
                                            }
                                        ],
                                        "id": 660,
                                        "name": "VariableDeclaration",
                                        "src": "2117:14:2"
                                    }
                                ],
                                "id": 661,
                                "name": "ParameterList",
                                "src": "2116:16:2"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 664,
                                "name": "ParameterList",
                                "src": "2150:0:2"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 896,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 662,
                                        "name": "Identifier",
                                        "src": "2133:9:2"
                                    }
                                ],
                                "id": 663,
                                "name": "ModifierInvocation",
                                "src": "2133:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 664
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "tuple()",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "claimTokens",
                                                            "referencedDeclaration": 491,
                                                            "type": "function (address) external"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 576,
                                                                    "type": "contract ControlledToken",
                                                                    "value": "tokenContract"
                                                                },
                                                                "id": 665,
                                                                "name": "Identifier",
                                                                "src": "2167:13:2"
                                                            }
                                                        ],
                                                        "id": 666,
                                                        "name": "MemberAccess",
                                                        "src": "2167:25:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 660,
                                                            "type": "address",
                                                            "value": "_token"
                                                        },
                                                        "id": 667,
                                                        "name": "Identifier",
                                                        "src": "2193:6:2"
                                                    }
                                                ],
                                                "id": 668,
                                                "name": "FunctionCall",
                                                "src": "2167:33:2"
                                            }
                                        ],
                                        "id": 669,
                                        "name": "Return",
                                        "src": "2160:40:2"
                                    }
                                ],
                                "id": 670,
                                "name": "Block",
                                "src": "2150:57:2"
                            }
                        ],
                        "id": 671,
                        "name": "FunctionDefinition",
                        "src": "2096:111:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "changeProxiedController",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_newController",
                                            "scope": 685,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 672,
                                                "name": "ElementaryTypeName",
                                                "src": "2362:7:2"
                                            }
                                        ],
                                        "id": 673,
                                        "name": "VariableDeclaration",
                                        "src": "2362:22:2"
                                    }
                                ],
                                "id": 674,
                                "name": "ParameterList",
                                "src": "2361:24:2"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 677,
                                "name": "ParameterList",
                                "src": "2403:0:2"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 896,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 675,
                                        "name": "Identifier",
                                        "src": "2386:9:2"
                                    }
                                ],
                                "id": 676,
                                "name": "ModifierInvocation",
                                "src": "2386:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "contract TokenController"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 578,
                                                            "type": "contract TokenController",
                                                            "value": "proxiedController"
                                                        },
                                                        "id": 678,
                                                        "name": "Identifier",
                                                        "src": "2413:17:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "contract TokenController",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 848,
                                                                    "type": "type(contract TokenController)",
                                                                    "value": "TokenController"
                                                                },
                                                                "id": 679,
                                                                "name": "Identifier",
                                                                "src": "2433:15:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 673,
                                                                    "type": "address",
                                                                    "value": "_newController"
                                                                },
                                                                "id": 680,
                                                                "name": "Identifier",
                                                                "src": "2449:14:2"
                                                            }
                                                        ],
                                                        "id": 681,
                                                        "name": "FunctionCall",
                                                        "src": "2433:31:2"
                                                    }
                                                ],
                                                "id": 682,
                                                "name": "Assignment",
                                                "src": "2413:51:2"
                                            }
                                        ],
                                        "id": 683,
                                        "name": "ExpressionStatement",
                                        "src": "2413:51:2"
                                    }
                                ],
                                "id": 684,
                                "name": "Block",
                                "src": "2403:68:2"
                            }
                        ],
                        "id": 685,
                        "name": "FunctionDefinition",
                        "src": "2329:142:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "name": "setTransfersToContractsAllowed",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_allow",
                                            "scope": 697,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bool",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bool",
                                                    "type": "bool"
                                                },
                                                "id": 686,
                                                "name": "ElementaryTypeName",
                                                "src": "2679:4:2"
                                            }
                                        ],
                                        "id": 687,
                                        "name": "VariableDeclaration",
                                        "src": "2679:11:2"
                                    }
                                ],
                                "id": 688,
                                "name": "ParameterList",
                                "src": "2678:13:2"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 691,
                                "name": "ParameterList",
                                "src": "2709:0:2"
                            },
                            {
                                "attributes": {
                                    "arguments": [
                                        null
                                    ]
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 896,
                                            "type": "modifier ()",
                                            "value": "onlyOwner"
                                        },
                                        "id": 689,
                                        "name": "Identifier",
                                        "src": "2692:9:2"
                                    }
                                ],
                                "id": 690,
                                "name": "ModifierInvocation",
                                "src": "2692:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 580,
                                                            "type": "bool",
                                                            "value": "allowTransfersToContracts"
                                                        },
                                                        "id": 692,
                                                        "name": "Identifier",
                                                        "src": "2719:25:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 687,
                                                            "type": "bool",
                                                            "value": "_allow"
                                                        },
                                                        "id": 693,
                                                        "name": "Identifier",
                                                        "src": "2747:6:2"
                                                    }
                                                ],
                                                "id": 694,
                                                "name": "Assignment",
                                                "src": "2719:34:2"
                                            }
                                        ],
                                        "id": 695,
                                        "name": "ExpressionStatement",
                                        "src": "2719:34:2"
                                    }
                                ],
                                "id": 696,
                                "name": "Block",
                                "src": "2709:51:2"
                            }
                        ],
                        "id": 697,
                        "name": "FunctionDefinition",
                        "src": "2639:121:2"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "isContract",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_addr",
                                            "scope": 719,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 698,
                                                "name": "ElementaryTypeName",
                                                "src": "2951:7:2"
                                            }
                                        ],
                                        "id": 699,
                                        "name": "VariableDeclaration",
                                        "src": "2951:13:2"
                                    }
                                ],
                                "id": 700,
                                "name": "ParameterList",
                                "src": "2950:15:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 719,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bool",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bool",
                                                    "type": "bool"
                                                },
                                                "id": 701,
                                                "name": "ElementaryTypeName",
                                                "src": "2992:4:2"
                                            }
                                        ],
                                        "id": 702,
                                        "name": "VariableDeclaration",
                                        "src": "2992:4:2"
                                    }
                                ],
                                "id": 703,
                                "name": "ParameterList",
                                "src": "2991:6:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "assignments": [
                                                null
                                            ],
                                            "initialValue": null
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "size",
                                                    "scope": 719,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint256",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint",
                                                            "type": "uint256"
                                                        },
                                                        "id": 704,
                                                        "name": "ElementaryTypeName",
                                                        "src": "3008:4:2"
                                                    }
                                                ],
                                                "id": 705,
                                                "name": "VariableDeclaration",
                                                "src": "3008:9:2"
                                            }
                                        ],
                                        "id": 706,
                                        "name": "VariableDeclarationStatement",
                                        "src": "3008:9:2"
                                    },
                                    {
                                        "attributes": {
                                            "falseBody": null
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "==",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 699,
                                                            "type": "address",
                                                            "value": "_addr"
                                                        },
                                                        "id": 707,
                                                        "name": "Identifier",
                                                        "src": "3031:5:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "30",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "number",
                                                            "type": "int_const 0",
                                                            "value": "0"
                                                        },
                                                        "id": 708,
                                                        "name": "Literal",
                                                        "src": "3040:1:2"
                                                    }
                                                ],
                                                "id": 709,
                                                "name": "BinaryOperation",
                                                "src": "3031:10:2"
                                            },
                                            {
                                                "attributes": {
                                                    "functionReturnParameters": 703
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "66616c7365",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "bool",
                                                            "type": "bool",
                                                            "value": "false"
                                                        },
                                                        "id": 710,
                                                        "name": "Literal",
                                                        "src": "3050:5:2"
                                                    }
                                                ],
                                                "id": 711,
                                                "name": "Return",
                                                "src": "3043:12:2"
                                            }
                                        ],
                                        "id": 712,
                                        "name": "IfStatement",
                                        "src": "3027:28:2"
                                    },
                                    {
                                        "attributes": {
                                            "externalReferences": [
                                                {
                                                    "size": {
                                                        "declaration": 705,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "3088:4:2",
                                                        "valueSize": 1
                                                    }
                                                },
                                                {
                                                    "_addr": {
                                                        "declaration": 699,
                                                        "isOffset": false,
                                                        "isSlot": false,
                                                        "src": "3108:5:2",
                                                        "valueSize": 1
                                                    }
                                                }
                                            ],
                                            "operations": "{\n    size := extcodesize(_addr)\n}"
                                        },
                                        "children": [],
                                        "id": 713,
                                        "name": "InlineAssembly",
                                        "src": "3065:74:2"
                                    },
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 703
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": ">",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 705,
                                                            "type": "uint256",
                                                            "value": "size"
                                                        },
                                                        "id": 714,
                                                        "name": "Identifier",
                                                        "src": "3140:4:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "30",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "number",
                                                            "type": "int_const 0",
                                                            "value": "0"
                                                        },
                                                        "id": 715,
                                                        "name": "Literal",
                                                        "src": "3145:1:2"
                                                    }
                                                ],
                                                "id": 716,
                                                "name": "BinaryOperation",
                                                "src": "3140:6:2"
                                            }
                                        ],
                                        "id": 717,
                                        "name": "Return",
                                        "src": "3133:13:2"
                                    }
                                ],
                                "id": 718,
                                "name": "Block",
                                "src": "2998:155:2"
                            }
                        ],
                        "id": 719,
                        "name": "FunctionDefinition",
                        "src": "2931:222:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "proxyPayment",
                            "payable": true,
                            "scope": 816,
                            "stateMutability": "payable",
                            "superFunction": 825,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_owner",
                                            "scope": 742,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 720,
                                                "name": "ElementaryTypeName",
                                                "src": "3483:7:2"
                                            }
                                        ],
                                        "id": 721,
                                        "name": "VariableDeclaration",
                                        "src": "3483:14:2"
                                    }
                                ],
                                "id": 722,
                                "name": "ParameterList",
                                "src": "3482:16:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 742,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bool",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bool",
                                                    "type": "bool"
                                                },
                                                "id": 723,
                                                "name": "ElementaryTypeName",
                                                "src": "3522:4:2"
                                            }
                                        ],
                                        "id": 724,
                                        "name": "VariableDeclaration",
                                        "src": "3522:4:2"
                                    }
                                ],
                                "id": 725,
                                "name": "ParameterList",
                                "src": "3521:6:2"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "==",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 578,
                                                            "type": "contract TokenController",
                                                            "value": "proxiedController"
                                                        },
                                                        "id": 726,
                                                        "name": "Identifier",
                                                        "src": "3541:17:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "address",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_0_by_1",
                                                                            "typeString": "int_const 0"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(address)",
                                                                    "value": "address"
                                                                },
                                                                "id": 727,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "3560:7:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "30",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "number",
                                                                    "type": "int_const 0",
                                                                    "value": "0"
                                                                },
                                                                "id": 728,
                                                                "name": "Literal",
                                                                "src": "3568:1:2"
                                                            }
                                                        ],
                                                        "id": 729,
                                                        "name": "FunctionCall",
                                                        "src": "3560:10:2"
                                                    }
                                                ],
                                                "id": 730,
                                                "name": "BinaryOperation",
                                                "src": "3541:29:2"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "functionReturnParameters": 725
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "66616c7365",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "bool",
                                                                    "type": "bool",
                                                                    "value": "false"
                                                                },
                                                                "id": 731,
                                                                "name": "Literal",
                                                                "src": "3592:5:2"
                                                            }
                                                        ],
                                                        "id": 732,
                                                        "name": "Return",
                                                        "src": "3585:12:2"
                                                    }
                                                ],
                                                "id": 733,
                                                "name": "Block",
                                                "src": "3571:37:2"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "functionReturnParameters": 725
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "isStructConstructorCall": false,
                                                                    "lValueRequested": false,
                                                                    "names": [
                                                                        null
                                                                    ],
                                                                    "type": "bool",
                                                                    "type_conversion": false
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            ],
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "member_name": "proxyPayment",
                                                                            "referencedDeclaration": 825,
                                                                            "type": "function (address) payable external returns (bool)"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 578,
                                                                                    "type": "contract TokenController",
                                                                                    "value": "proxiedController"
                                                                                },
                                                                                "id": 734,
                                                                                "name": "Identifier",
                                                                                "src": "3633:17:2"
                                                                            }
                                                                        ],
                                                                        "id": 735,
                                                                        "name": "MemberAccess",
                                                                        "src": "3633:30:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 721,
                                                                            "type": "address",
                                                                            "value": "_owner"
                                                                        },
                                                                        "id": 736,
                                                                        "name": "Identifier",
                                                                        "src": "3664:6:2"
                                                                    }
                                                                ],
                                                                "id": 737,
                                                                "name": "FunctionCall",
                                                                "src": "3633:38:2"
                                                            }
                                                        ],
                                                        "id": 738,
                                                        "name": "Return",
                                                        "src": "3626:45:2"
                                                    }
                                                ],
                                                "id": 739,
                                                "name": "Block",
                                                "src": "3612:70:2"
                                            }
                                        ],
                                        "id": 740,
                                        "name": "IfStatement",
                                        "src": "3538:144:2"
                                    }
                                ],
                                "id": 741,
                                "name": "Block",
                                "src": "3528:160:2"
                            }
                        ],
                        "id": 742,
                        "name": "FunctionDefinition",
                        "src": "3461:227:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "onTransfer",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "nonpayable",
                            "superFunction": 836,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_from",
                                            "scope": 786,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 743,
                                                "name": "ElementaryTypeName",
                                                "src": "4096:7:2"
                                            }
                                        ],
                                        "id": 744,
                                        "name": "VariableDeclaration",
                                        "src": "4096:13:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_to",
                                            "scope": 786,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 745,
                                                "name": "ElementaryTypeName",
                                                "src": "4111:7:2"
                                            }
                                        ],
                                        "id": 746,
                                        "name": "VariableDeclaration",
                                        "src": "4111:11:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_amount",
                                            "scope": 786,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 747,
                                                "name": "ElementaryTypeName",
                                                "src": "4124:4:2"
                                            }
                                        ],
                                        "id": 748,
                                        "name": "VariableDeclaration",
                                        "src": "4124:12:2"
                                    }
                                ],
                                "id": 749,
                                "name": "ParameterList",
                                "src": "4095:42:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 786,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bool",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bool",
                                                    "type": "bool"
                                                },
                                                "id": 750,
                                                "name": "ElementaryTypeName",
                                                "src": "4153:4:2"
                                            }
                                        ],
                                        "id": 751,
                                        "name": "VariableDeclaration",
                                        "src": "4153:4:2"
                                    }
                                ],
                                "id": 752,
                                "name": "ParameterList",
                                "src": "4152:6:2"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "==",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 578,
                                                            "type": "contract TokenController",
                                                            "value": "proxiedController"
                                                        },
                                                        "id": 753,
                                                        "name": "Identifier",
                                                        "src": "4172:17:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "address",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_0_by_1",
                                                                            "typeString": "int_const 0"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(address)",
                                                                    "value": "address"
                                                                },
                                                                "id": 754,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "4191:7:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "30",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "number",
                                                                    "type": "int_const 0",
                                                                    "value": "0"
                                                                },
                                                                "id": 755,
                                                                "name": "Literal",
                                                                "src": "4199:1:2"
                                                            }
                                                        ],
                                                        "id": 756,
                                                        "name": "FunctionCall",
                                                        "src": "4191:10:2"
                                                    }
                                                ],
                                                "id": 757,
                                                "name": "BinaryOperation",
                                                "src": "4172:29:2"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "functionReturnParameters": 752
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "operator": "||",
                                                                    "type": "bool"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 580,
                                                                            "type": "bool",
                                                                            "value": "allowTransfersToContracts"
                                                                        },
                                                                        "id": 758,
                                                                        "name": "Identifier",
                                                                        "src": "4223:25:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "operator": "!",
                                                                            "prefix": true,
                                                                            "type": "bool"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "isStructConstructorCall": false,
                                                                                    "lValueRequested": false,
                                                                                    "names": [
                                                                                        null
                                                                                    ],
                                                                                    "type": "bool",
                                                                                    "type_conversion": false
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": [
                                                                                                {
                                                                                                    "typeIdentifier": "t_address",
                                                                                                    "typeString": "address"
                                                                                                }
                                                                                            ],
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 719,
                                                                                            "type": "function (address) view returns (bool)",
                                                                                            "value": "isContract"
                                                                                        },
                                                                                        "id": 759,
                                                                                        "name": "Identifier",
                                                                                        "src": "4253:10:2"
                                                                                    },
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 746,
                                                                                            "type": "address",
                                                                                            "value": "_to"
                                                                                        },
                                                                                        "id": 760,
                                                                                        "name": "Identifier",
                                                                                        "src": "4264:3:2"
                                                                                    }
                                                                                ],
                                                                                "id": 761,
                                                                                "name": "FunctionCall",
                                                                                "src": "4253:15:2"
                                                                            }
                                                                        ],
                                                                        "id": 762,
                                                                        "name": "UnaryOperation",
                                                                        "src": "4252:16:2"
                                                                    }
                                                                ],
                                                                "id": 763,
                                                                "name": "BinaryOperation",
                                                                "src": "4223:45:2"
                                                            }
                                                        ],
                                                        "id": 764,
                                                        "name": "Return",
                                                        "src": "4216:52:2"
                                                    }
                                                ],
                                                "id": 765,
                                                "name": "Block",
                                                "src": "4202:77:2"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "bool",
                                                            "type_conversion": false
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "onTransfer",
                                                                    "referencedDeclaration": 836,
                                                                    "type": "function (address,address,uint256) external returns (bool)"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 578,
                                                                            "type": "contract TokenController",
                                                                            "value": "proxiedController"
                                                                        },
                                                                        "id": 766,
                                                                        "name": "Identifier",
                                                                        "src": "4287:17:2"
                                                                    }
                                                                ],
                                                                "id": 767,
                                                                "name": "MemberAccess",
                                                                "src": "4287:28:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 744,
                                                                    "type": "address",
                                                                    "value": "_from"
                                                                },
                                                                "id": 768,
                                                                "name": "Identifier",
                                                                "src": "4316:5:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 746,
                                                                    "type": "address",
                                                                    "value": "_to"
                                                                },
                                                                "id": 769,
                                                                "name": "Identifier",
                                                                "src": "4323:3:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 748,
                                                                    "type": "uint256",
                                                                    "value": "_amount"
                                                                },
                                                                "id": 770,
                                                                "name": "Identifier",
                                                                "src": "4328:7:2"
                                                            }
                                                        ],
                                                        "id": 771,
                                                        "name": "FunctionCall",
                                                        "src": "4287:49:2"
                                                    },
                                                    {
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "functionReturnParameters": 752
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "hexvalue": "74727565",
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "subdenomination": null,
                                                                            "token": "bool",
                                                                            "type": "bool",
                                                                            "value": "true"
                                                                        },
                                                                        "id": 772,
                                                                        "name": "Literal",
                                                                        "src": "4358:4:2"
                                                                    }
                                                                ],
                                                                "id": 773,
                                                                "name": "Return",
                                                                "src": "4351:11:2"
                                                            }
                                                        ],
                                                        "id": 774,
                                                        "name": "Block",
                                                        "src": "4337:36:2"
                                                    },
                                                    {
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "functionReturnParameters": 752
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_bool",
                                                                                "typeString": "bool"
                                                                            },
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "operator": "||",
                                                                            "type": "bool"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 580,
                                                                                    "type": "bool",
                                                                                    "value": "allowTransfersToContracts"
                                                                                },
                                                                                "id": 775,
                                                                                "name": "Identifier",
                                                                                "src": "4398:25:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "operator": "!",
                                                                                    "prefix": true,
                                                                                    "type": "bool"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": false,
                                                                                            "isStructConstructorCall": false,
                                                                                            "lValueRequested": false,
                                                                                            "names": [
                                                                                                null
                                                                                            ],
                                                                                            "type": "bool",
                                                                                            "type_conversion": false
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": [
                                                                                                        {
                                                                                                            "typeIdentifier": "t_address",
                                                                                                            "typeString": "address"
                                                                                                        }
                                                                                                    ],
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 719,
                                                                                                    "type": "function (address) view returns (bool)",
                                                                                                    "value": "isContract"
                                                                                                },
                                                                                                "id": 776,
                                                                                                "name": "Identifier",
                                                                                                "src": "4428:10:2"
                                                                                            },
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 746,
                                                                                                    "type": "address",
                                                                                                    "value": "_to"
                                                                                                },
                                                                                                "id": 777,
                                                                                                "name": "Identifier",
                                                                                                "src": "4439:3:2"
                                                                                            }
                                                                                        ],
                                                                                        "id": 778,
                                                                                        "name": "FunctionCall",
                                                                                        "src": "4428:15:2"
                                                                                    }
                                                                                ],
                                                                                "id": 779,
                                                                                "name": "UnaryOperation",
                                                                                "src": "4427:16:2"
                                                                            }
                                                                        ],
                                                                        "id": 780,
                                                                        "name": "BinaryOperation",
                                                                        "src": "4398:45:2"
                                                                    }
                                                                ],
                                                                "id": 781,
                                                                "name": "Return",
                                                                "src": "4391:52:2"
                                                            }
                                                        ],
                                                        "id": 782,
                                                        "name": "Block",
                                                        "src": "4377:77:2"
                                                    }
                                                ],
                                                "id": 783,
                                                "name": "IfStatement",
                                                "src": "4284:170:2"
                                            }
                                        ],
                                        "id": 784,
                                        "name": "IfStatement",
                                        "src": "4169:285:2"
                                    }
                                ],
                                "id": 785,
                                "name": "Block",
                                "src": "4159:301:2"
                            }
                        ],
                        "id": 786,
                        "name": "FunctionDefinition",
                        "src": "4076:384:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "onApprove",
                            "payable": false,
                            "scope": 816,
                            "stateMutability": "nonpayable",
                            "superFunction": 847,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_owner",
                                            "scope": 815,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 787,
                                                "name": "ElementaryTypeName",
                                                "src": "4894:7:2"
                                            }
                                        ],
                                        "id": 788,
                                        "name": "VariableDeclaration",
                                        "src": "4894:14:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_spender",
                                            "scope": 815,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 789,
                                                "name": "ElementaryTypeName",
                                                "src": "4910:7:2"
                                            }
                                        ],
                                        "id": 790,
                                        "name": "VariableDeclaration",
                                        "src": "4910:16:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_amount",
                                            "scope": 815,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 791,
                                                "name": "ElementaryTypeName",
                                                "src": "4928:4:2"
                                            }
                                        ],
                                        "id": 792,
                                        "name": "VariableDeclaration",
                                        "src": "4928:12:2"
                                    }
                                ],
                                "id": 793,
                                "name": "ParameterList",
                                "src": "4893:48:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 815,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bool",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bool",
                                                    "type": "bool"
                                                },
                                                "id": 794,
                                                "name": "ElementaryTypeName",
                                                "src": "4965:4:2"
                                            }
                                        ],
                                        "id": 795,
                                        "name": "VariableDeclaration",
                                        "src": "4965:4:2"
                                    }
                                ],
                                "id": 796,
                                "name": "ParameterList",
                                "src": "4964:6:2"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "==",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 578,
                                                            "type": "contract TokenController",
                                                            "value": "proxiedController"
                                                        },
                                                        "id": 797,
                                                        "name": "Identifier",
                                                        "src": "4988:17:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "address",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_0_by_1",
                                                                            "typeString": "int_const 0"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(address)",
                                                                    "value": "address"
                                                                },
                                                                "id": 798,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "5007:7:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "30",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "number",
                                                                    "type": "int_const 0",
                                                                    "value": "0"
                                                                },
                                                                "id": 799,
                                                                "name": "Literal",
                                                                "src": "5015:1:2"
                                                            }
                                                        ],
                                                        "id": 800,
                                                        "name": "FunctionCall",
                                                        "src": "5007:10:2"
                                                    }
                                                ],
                                                "id": 801,
                                                "name": "BinaryOperation",
                                                "src": "4988:29:2"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "functionReturnParameters": 796
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "74727565",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "bool",
                                                                    "type": "bool",
                                                                    "value": "true"
                                                                },
                                                                "id": 802,
                                                                "name": "Literal",
                                                                "src": "5039:4:2"
                                                            }
                                                        ],
                                                        "id": 803,
                                                        "name": "Return",
                                                        "src": "5032:11:2"
                                                    }
                                                ],
                                                "id": 804,
                                                "name": "Block",
                                                "src": "5018:36:2"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "functionReturnParameters": 796
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "isStructConstructorCall": false,
                                                                    "lValueRequested": false,
                                                                    "names": [
                                                                        null
                                                                    ],
                                                                    "type": "bool",
                                                                    "type_conversion": false
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                },
                                                                                {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                },
                                                                                {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            ],
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "member_name": "onApprove",
                                                                            "referencedDeclaration": 847,
                                                                            "type": "function (address,address,uint256) external returns (bool)"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 578,
                                                                                    "type": "contract TokenController",
                                                                                    "value": "proxiedController"
                                                                                },
                                                                                "id": 805,
                                                                                "name": "Identifier",
                                                                                "src": "5079:17:2"
                                                                            }
                                                                        ],
                                                                        "id": 806,
                                                                        "name": "MemberAccess",
                                                                        "src": "5079:27:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 788,
                                                                            "type": "address",
                                                                            "value": "_owner"
                                                                        },
                                                                        "id": 807,
                                                                        "name": "Identifier",
                                                                        "src": "5107:6:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 790,
                                                                            "type": "address",
                                                                            "value": "_spender"
                                                                        },
                                                                        "id": 808,
                                                                        "name": "Identifier",
                                                                        "src": "5115:8:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 792,
                                                                            "type": "uint256",
                                                                            "value": "_amount"
                                                                        },
                                                                        "id": 809,
                                                                        "name": "Identifier",
                                                                        "src": "5125:7:2"
                                                                    }
                                                                ],
                                                                "id": 810,
                                                                "name": "FunctionCall",
                                                                "src": "5079:54:2"
                                                            }
                                                        ],
                                                        "id": 811,
                                                        "name": "Return",
                                                        "src": "5072:61:2"
                                                    }
                                                ],
                                                "id": 812,
                                                "name": "Block",
                                                "src": "5058:86:2"
                                            }
                                        ],
                                        "id": 813,
                                        "name": "IfStatement",
                                        "src": "4985:159:2"
                                    }
                                ],
                                "id": 814,
                                "name": "Block",
                                "src": "4975:175:2"
                            }
                        ],
                        "id": 815,
                        "name": "FunctionDefinition",
                        "src": "4875:275:2"
                    }
                ],
                "id": 816,
                "name": "ContractDefinition",
                "src": "265:4889:2"
            }
        ],
        "id": 817,
        "name": "SourceUnit",
        "src": "0:5154:2"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "1.0.1",
    "updatedAt": "2018-01-07T10:22:16.928Z"
};