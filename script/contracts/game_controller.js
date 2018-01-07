module.exports = {
    "contractName": "GameController",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_game",
                    "type": "address"
                }
            ],
            "name": "owners",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "amount_owner",
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
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_game",
                    "type": "address"
                }
            ],
            "name": "reserved_amount",
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
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_game",
                    "type": "address"
                }
            ],
            "name": "approved_amount",
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
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_game",
                    "type": "address"
                }
            ],
            "name": "available_amount",
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
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_game",
                    "type": "address"
                }
            ],
            "name": "owner_index",
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
            "constant": true,
            "inputs": [],
            "name": "master",
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
                    "name": "",
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
            "constant": true,
            "inputs": [],
            "name": "token",
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
            "inputs": [
                {
                    "name": "_token",
                    "type": "address"
                },
                {
                    "name": "_master",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
    ],
    "bytecode": "0x6060604052341561000f57600080fd5b6040516040806109528339810160405280805191906020018051915050600160a060020a038116151561004157600080fd5b600160a060020a038216151561005657600080fd5b60008054600160a060020a03928316600160a060020a031991821617909155600180549390921692169190911790556108be806100946000396000f3006060604052600436106100955763ffffffff60e060020a600035041663022914a7811461009a57806307fe1b611461010c5780634a3931491461014a5780636194126d146101865780636b9a38b1146101bd57806370ef4f70146101e25780637a8952ec14610207578063da682aeb1461022c578063ee97f7f314610254578063f48c305414610267578063fc0c546a1461027b575b600080fd5b34156100a557600080fd5b6100b9600160a060020a036004351661028e565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156100f85780820151838201526020016100e0565b505050509050019250505060405180910390f35b341561011757600080fd5b61012e600160a060020a036004351660243561031e565b604051600160a060020a03909116815260200160405180910390f35b341561015557600080fd5b610172600160a060020a0360043581169060243516604435610457565b604051901515815260200160405180910390f35b341561019157600080fd5b6101ab600160a060020a0360043581169060243516610601565b60405190815260200160405180910390f35b34156101c857600080fd5b6101ab600160a060020a0360043581169060243516610631565b34156101ed57600080fd5b6101ab600160a060020a0360043581169060243516610660565b341561021257600080fd5b6101ab600160a060020a0360043581169060243516610716565b341561023757600080fd5b610172600160a060020a0360043581169060243516604435610746565b341561025f57600080fd5b61012e610812565b610172600160a060020a0360043516610821565b341561028657600080fd5b61012e610827565b610296610836565b6002600083600160a060020a0316600160a060020a0316815260200190815260200160002060000180548060200260200160405190810160405280929190818152602001828054801561031257602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116102f4575b50505050509050919050565b600160a060020a0382166000908152600260205260408120548180805b8383101561044857600160a060020a038716600090815260026020526040902080548490811061036757fe5b6000918252602082200154600154600160a060020a03918216945088929116906370a082319085906040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156103d457600080fd5b6102c65a03f115156103e557600080fd5b5050506040518051905010151561043d5750600160a060020a03808716600090815260026020818152604080842094861684526001948501909152909120908101549181015490918701901061043d5781945061044d565b60019092019161033b565b600094505b5050505092915050565b600080548190819081908190819033600160a060020a0390811691161461047d57600080fd5b600160a060020a038089166000908152600260209081526040808320938d168352600184019091528120805492975095509011156105a457600284018054880190558454859350428115156104ce57fe5b06915082828154811015156104df57fe5b60009182526020909120015484548454600160a060020a039092169250829185916000190190811061050d57fe5b906000526020600020900160006101000a815481600160a060020a030219169083600160a060020a0316021790555088838381548110151561054b57fe5b6000918252602080832091909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03948516179055865492841682526001888101909152604090912091909155828101855595506105f5565b600160a060020a03808a166000908152600260209081526040808320938c168352600184019091528120805492975095509011156105f0576002840180548890039055600195506105f5565b600095505b50505050509392505050565b600160a060020a039081166000908152600260208181526040808420959094168352600190940190935220015490565b600160a060020a0390811660009081526002602090815260408083209490931682526001938401905220015490565b600160a060020a03808216600090815260026020908152604080832086851684526001908101909252808320820154915492939192849216906370a082319087908490516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156106e657600080fd5b6102c65a03f115156106f757600080fd5b50505060405180519150508181101561070e578091505b509392505050565b600160a060020a038082166000908152600260209081526040808320938616835260019093019052205492915050565b6000805481908190819033600160a060020a0390811691161461076857600080fd5b600160a060020a038087166000908152600260209081526040808320938b1683526001840190915290208054919450925015156107ff5782546107ae8460018301610848565b90508683600001828154811015156107c257fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556001810182555b5060019081019390935550909392505050565b600054600160a060020a031681565b50600090565b600154600160a060020a031681565b60206040519081016040526000815290565b81548183558181151161086c5760008381526020902061086c918101908301610871565b505050565b61088f91905b8082111561088b5760008155600101610877565b5090565b905600a165627a7a72305820aaaf4d57f3d0e912ffd6c5228e017b175e296c1593770e9040eb47ba83bb3d5b0029",
    "deployedBytecode": "0x6060604052600436106100955763ffffffff60e060020a600035041663022914a7811461009a57806307fe1b611461010c5780634a3931491461014a5780636194126d146101865780636b9a38b1146101bd57806370ef4f70146101e25780637a8952ec14610207578063da682aeb1461022c578063ee97f7f314610254578063f48c305414610267578063fc0c546a1461027b575b600080fd5b34156100a557600080fd5b6100b9600160a060020a036004351661028e565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156100f85780820151838201526020016100e0565b505050509050019250505060405180910390f35b341561011757600080fd5b61012e600160a060020a036004351660243561031e565b604051600160a060020a03909116815260200160405180910390f35b341561015557600080fd5b610172600160a060020a0360043581169060243516604435610457565b604051901515815260200160405180910390f35b341561019157600080fd5b6101ab600160a060020a0360043581169060243516610601565b60405190815260200160405180910390f35b34156101c857600080fd5b6101ab600160a060020a0360043581169060243516610631565b34156101ed57600080fd5b6101ab600160a060020a0360043581169060243516610660565b341561021257600080fd5b6101ab600160a060020a0360043581169060243516610716565b341561023757600080fd5b610172600160a060020a0360043581169060243516604435610746565b341561025f57600080fd5b61012e610812565b610172600160a060020a0360043516610821565b341561028657600080fd5b61012e610827565b610296610836565b6002600083600160a060020a0316600160a060020a0316815260200190815260200160002060000180548060200260200160405190810160405280929190818152602001828054801561031257602002820191906000526020600020905b8154600160a060020a031681526001909101906020018083116102f4575b50505050509050919050565b600160a060020a0382166000908152600260205260408120548180805b8383101561044857600160a060020a038716600090815260026020526040902080548490811061036757fe5b6000918252602082200154600154600160a060020a03918216945088929116906370a082319085906040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156103d457600080fd5b6102c65a03f115156103e557600080fd5b5050506040518051905010151561043d5750600160a060020a03808716600090815260026020818152604080842094861684526001948501909152909120908101549181015490918701901061043d5781945061044d565b60019092019161033b565b600094505b5050505092915050565b600080548190819081908190819033600160a060020a0390811691161461047d57600080fd5b600160a060020a038089166000908152600260209081526040808320938d168352600184019091528120805492975095509011156105a457600284018054880190558454859350428115156104ce57fe5b06915082828154811015156104df57fe5b60009182526020909120015484548454600160a060020a039092169250829185916000190190811061050d57fe5b906000526020600020900160006101000a815481600160a060020a030219169083600160a060020a0316021790555088838381548110151561054b57fe5b6000918252602080832091909101805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03948516179055865492841682526001888101909152604090912091909155828101855595506105f5565b600160a060020a03808a166000908152600260209081526040808320938c168352600184019091528120805492975095509011156105f0576002840180548890039055600195506105f5565b600095505b50505050509392505050565b600160a060020a039081166000908152600260208181526040808420959094168352600190940190935220015490565b600160a060020a0390811660009081526002602090815260408083209490931682526001938401905220015490565b600160a060020a03808216600090815260026020908152604080832086851684526001908101909252808320820154915492939192849216906370a082319087908490516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156106e657600080fd5b6102c65a03f115156106f757600080fd5b50505060405180519150508181101561070e578091505b509392505050565b600160a060020a038082166000908152600260209081526040808320938616835260019093019052205492915050565b6000805481908190819033600160a060020a0390811691161461076857600080fd5b600160a060020a038087166000908152600260209081526040808320938b1683526001840190915290208054919450925015156107ff5782546107ae8460018301610848565b90508683600001828154811015156107c257fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556001810182555b5060019081019390935550909392505050565b600054600160a060020a031681565b50600090565b600154600160a060020a031681565b60206040519081016040526000815290565b81548183558181151161086c5760008381526020902061086c918101908301610871565b505050565b61088f91905b8082111561088b5760008155600101610877565b5090565b905600a165627a7a72305820aaaf4d57f3d0e912ffd6c5228e017b175e296c1593770e9040eb47ba83bb3d5b0029",
    "sourceMap": "958:3692:2:-;;;1323:207;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;1403:21:2;;;;1395:30;;;;;;-1:-1:-1;;;;;1443:29:2;;;;1435:38;;;;;;1483:6;:16;;-1:-1:-1;;;;;1483:16:2;;;-1:-1:-1;;;;;;1483:16:2;;;;;;;;1509:14;;;;;;;;;;;;;;958:3692;;;;;;",
    "deployedSourceMap": "958:3692:2:-;;;;;;;;;-1:-1:-1;;;958:3692:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4539:109;;;;;;;;;;-1:-1:-1;;;;;4539:109:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;71:3;;;64:6;52:2;45:3;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;3207:548:2;;;;;;;;;;-1:-1:-1;;;;;3207:548:2;;;;;;;;;;-1:-1:-1;;;;;3207:548:2;;;;;;;;;;;;;;2045:1061;;;;;;;;;;-1:-1:-1;;;;;2045:1061:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3925:158;;;;;;;;;;-1:-1:-1;;;;;3925:158:2;;;;;;;;;;;;;;;;;;;;;;;;;3761;;;;;;;;;;-1:-1:-1;;;;;3761:158:2;;;;;;;;;;4243:290;;;;;;;;;;-1:-1:-1;;;;;4243:290:2;;;;;;;;;;4089:148;;;;;;;;;;-1:-1:-1;;;;;4089:148:2;;;;;;;;;;1536:503;;;;;;;;;;-1:-1:-1;;;;;1536:503:2;;;;;;;;;;;;1221:21;;;;;;;;;;;;3112:89;;-1:-1:-1;;;;;3112:89:2;;;;;1248:20;;;;;;;;;;;;4539:109;4590:9;;:::i;:::-;4617:10;:17;4628:5;-1:-1:-1;;;;;4617:17:2;-1:-1:-1;;;;;4617:17:2;;;;;;;;;;;;:24;;4610:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4610:31:2;;;;;;;;;;;;;;;;;;;;;;;4539:109;;;:::o;3207:548::-;-1:-1:-1;;;;;3313:15:2;;3279:7;3313:15;;;:10;:15;;;;;:29;3279:7;;;3352:370;3372:5;3368:1;:9;3352:370;;;-1:-1:-1;;;;;3414:15:2;;;;;;:10;:15;;;;;:25;;3437:1;;3414:25;;;;;;;;;;;;;;;;3456:5;-1:-1:-1;;;;;3414:25:2;;;;-1:-1:-1;3480:7:2;;3456:5;;;:15;;3414:25;;3456:22;;;;;;;-1:-1:-1;;;3456:22:2;;;;;;-1:-1:-1;;;;;3456:22:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:31;;3453:259;;;-1:-1:-1;;;;;;3532:15:2;;;;;;;:10;:15;;;;;;;;:31;;;;;:24;;;;:31;;;;;;3621:23;;;;3584;;;;3532:31;;3611:33;;3584:60;;3581:117;;3674:5;3667:12;;;;3581:117;3379:3;;;;;3352:370;;;3746:1;3731:17;;3207:548;;;;;;;;;:::o;2045:1061::-;2122:4;2157:6;;2122:4;;;;;;;;;;2145:10;-1:-1:-1;;;;;2145:18:2;;;2157:6;;2145:18;2137:27;;;;;;-1:-1:-1;;;;;2205:15:2;;;;;;;:10;:15;;;;;;;;2256:25;;;;;:18;;;:25;;;;;2295:17;;2205:15;;-1:-1:-1;2256:25:2;-1:-1:-1;2295:19:2;;2292:808;;;2330:23;;;:34;;;;;;2478:13;;2405:9;;-1:-1:-1;2460:15:2;:31;;;;;;;;2436:56;;2529:6;2536:12;2529:20;;;;;;;;;;;;;;;;;;;;2571:17;;2564:27;;-1:-1:-1;;;;;2529:20:2;;;;-1:-1:-1;2529:20:2;;2564:6;;-1:-1:-1;;2571:19:2;;2564:27;;;;;;;;;;;;;;;:42;;;;;-1:-1:-1;;;;;2564:42:2;;;;;-1:-1:-1;;;;;2564:42:2;;;;;;2643:5;2620:6;2627:12;2620:20;;;;;;;;;;;;;;;;;;;;;;:28;;-1:-1:-1;;2620:28:2;-1:-1:-1;;;;;2620:28:2;;;;;;2708:17;;2663:32;;;;;-1:-1:-1;2663:18:2;;;:32;;;;;;;:62;;;;2759:16;;;2739:36;;-1:-1:-1;;2790:11:2;;2292:808;-1:-1:-1;;;;;2842:17:2;;;;;;;:10;:17;;;;;;;;2883:23;;;;;:18;;;:23;;;;;2924:17;;2842;;-1:-1:-1;2883:23:2;-1:-1:-1;2924:19:2;;2921:168;;;2962:23;;;:34;;;;;;;-1:-1:-1;;;3014:11:2;;2921:168;3069:5;3062:12;;2921:168;2045:1061;;;;;;;;;;:::o;3925:158::-;-1:-1:-1;;;;;4026:17:2;;;4001:7;4026:17;;;:10;:17;;;;;;;;:34;;;;;;:26;;;;:34;;;;:50;;;3925:158::o;3761:::-;-1:-1:-1;;;;;3862:17:2;;;3837:7;3862:17;;;:10;:17;;;;;;;;:34;;;;;;:26;;;;:34;;;:50;;;3761:158::o;4243:290::-;-1:-1:-1;;;;;4352:17:2;;;4320:7;4352:17;;;:10;:17;;;;;;;;:34;;;;;:26;;;;:34;;;;;;:50;;;4426:5;;4320:7;;4352:50;;4320:7;;4426:5;;:15;;4379:6;;4320:7;;4426:23;;;;;;-1:-1:-1;;;4426:23:2;;;;;;-1:-1:-1;;;;;4426:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4463:9:2;;;4459:48;;;4493:3;4487:9;;4459:48;-1:-1:-1;4523:3:2;4243:290;-1:-1:-1;;;4243:290:2:o;4089:148::-;-1:-1:-1;;;;;4186:17:2;;;4161:7;4186:17;;;:10;:17;;;;;;;;:34;;;;;:26;;;;:34;;;:44;4089:148;;;;:::o;1536:503::-;1618:4;1653:6;;1618:4;;;;;;1641:10;-1:-1:-1;;;;;1641:18:2;;;1653:6;;1641:18;1633:27;;;;;;-1:-1:-1;;;;;1701:20:2;;;;;;;:10;:20;;;;;;;;1757:26;;;;;:18;;;:26;;;;;1797:17;;1701:20;;-1:-1:-1;1757:26:2;-1:-1:-1;1797:20:2;1794:173;;;1844:25;;;:9;:25;;;;:::i;:::-;1832:37;;1908:6;1883:9;:16;;1900:4;1883:22;;;;;;;;;;;;;;;;;;;:31;;-1:-1:-1;;1883:31:2;-1:-1:-1;;;;;1883:31:2;;;;;;;;;;-1:-1:-1;1948:8:2;;1928:28;;1794:173;-1:-1:-1;1977:23:2;;;;:33;;;;-1:-1:-1;1977:23:2;;1536:503;-1:-1:-1;;;1536:503:2:o;1221:21::-;;;-1:-1:-1;;;;;1221:21:2;;:::o;3112:89::-;-1:-1:-1;3166:4:2;;3112:89::o;1248:20::-;;;-1:-1:-1;;;;;1248:20:2;;:::o;958:3692::-;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity ^0.4.11;\n\nimport \"../token/TokenController.sol\";\nimport \"../token/ERC20.sol\";\n\n/**\n * @title GameController\n * @dev GameController is a TokenController contract to calculate the amount of tokens,\n *  which can be used in the game.\n *\n * The contract ensures, that the game can use the amount of tokens, allowed by\n * token holders. Note, that token holder may allow more tokens, that it holds, to more than one game.\n *\n * After the tokens are used in prize, they are transfered to the game, and token holder apparently\n * may not use them before the prize is claimed or expired.\n *\n * Contract also ensures the rotation of token holders, so that the last used token holder is placed\n * to the end of the queue. It guarantees that all token holders have the same chance to participate in the\n * game.\n *\n * Game requests the amount of tokens from GameController using amount_owner() method.\n *\n * @author Aleksey Studnev <studnev@izx.io>\n */\ncontract GameController is TokenController {\n\n    struct Balance {\n        uint key_index;\n        uint approved_amount;\n        uint reserved_amount;\n    }\n\n    struct Allowance {\n       address[] owners;\n       mapping( address => Balance) balances;\n    }\n\n    address public master;\n    ERC20   public token;\n\n    mapping( address => Allowance) allowances;\n\n    function GameController(ERC20 _token, address _master) public {\n        require(_master != address(0));\n        require(address(_token) != address(0));\n        master = _master;\n        token = _token;\n    }\n\n    function onApprove(address _owner, address _spender, uint _amount) public returns(bool){\n        require(msg.sender==master);\n\n        Allowance storage allowance = allowances[_spender];\n        Balance storage balance = allowance.balances[_owner];\n\n        if(balance.key_index==0){\n            uint next = allowance.owners.length++;\n            allowance.owners[next] = _owner;\n            balance.key_index = next + 1;\n        }\n\n        balance.approved_amount = _amount;\n\n        return true;\n    }\n\n    function onTransfer(address _from, address _to, uint _amount) public returns(bool){\n        require(msg.sender==master);\n\n        Allowance storage allowance = allowances[_to];\n        Balance storage balance = allowance.balances[_from];\n\n        if(balance.key_index>0){\n\n            balance.reserved_amount += _amount;\n            address[] storage owners = allowance.owners;\n\n            uint256 switch_index = (block.timestamp % owners.length);\n            address switch_owner = owners[switch_index];\n\n            owners[balance.key_index-1] = switch_owner;\n            owners[switch_index] = _from;\n\n            allowance.balances[switch_owner].key_index = balance.key_index;\n            balance.key_index = switch_index + 1;\n\n            return true;\n        }else{\n            allowance = allowances[_from];\n            balance = allowance.balances[_to];\n\n            if(balance.key_index>0){\n                balance.reserved_amount -= _amount;\n                return true;\n            }else{\n                return false;\n            }\n\n        }\n    }\n\n    function proxyPayment(address) payable public returns(bool) {\n        return false;\n    }\n\n    function amount_owner(address _to, uint256 _amount) view public returns(address){\n        uint256 count = allowances[_to].owners.length;\n        for(uint i = 0; i < count; i++ ){\n            address owner = allowances[_to].owners[i];\n            if(token.balanceOf(owner)>=_amount){\n                Balance storage balance = allowances[_to].balances[owner];\n                if(balance.approved_amount >= _amount + balance.reserved_amount){\n                    return owner;\n                }\n            }\n        }\n        return address(0);\n    }\n\n    function approved_amount(address _owner, address _game) view public returns(uint256){\n        return allowances[_game].balances[_owner].approved_amount;\n    }\n\n    function reserved_amount(address _owner, address _game) view public returns(uint256){\n        return allowances[_game].balances[_owner].reserved_amount;\n    }\n\n    function owner_index(address _owner, address _game) view public returns(uint256){\n        return allowances[_game].balances[_owner].key_index;\n    }\n\n    function available_amount(address _owner, address _game) view public returns(uint256){\n        uint256 amt = allowances[_game].balances[_owner].approved_amount;\n        uint256 bal = token.balanceOf(_owner);\n        if( bal < amt){\n            amt = bal;\n        }\n        return amt;\n    }\n\n    function owners(address _game) view public returns(address[]){\n        return allowances[_game].owners;\n    }\n}",
    "sourcePath": "/Users/studnev/dev4bc/contracts/contracts/game/GameController.sol",
    "ast": {
        "attributes": {
            "absolutePath": "/Users/studnev/dev4bc/contracts/contracts/game/GameController.sol",
            "exportedSymbols": {
                "GameController": [
                    836
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
                "id": 386,
                "name": "PragmaDirective",
                "src": "0:24:2"
            },
            {
                "attributes": {
                    "SourceUnit": 1970,
                    "absolutePath": "/Users/studnev/dev4bc/contracts/contracts/token/TokenController.sol",
                    "file": "../token/TokenController.sol",
                    "scope": 837,
                    "symbolAliases": [
                        null
                    ],
                    "unitAlias": ""
                },
                "id": 387,
                "name": "ImportDirective",
                "src": "26:38:2"
            },
            {
                "attributes": {
                    "SourceUnit": 1903,
                    "absolutePath": "/Users/studnev/dev4bc/contracts/contracts/token/ERC20.sol",
                    "file": "../token/ERC20.sol",
                    "scope": 837,
                    "symbolAliases": [
                        null
                    ],
                    "unitAlias": ""
                },
                "id": 388,
                "name": "ImportDirective",
                "src": "65:28:2"
            },
            {
                "attributes": {
                    "contractDependencies": [
                        1934
                    ],
                    "contractKind": "contract",
                    "documentation": "@title GameController\n@dev GameController is a TokenController contract to calculate the amount of tokens,\n which can be used in the game.\n * The contract ensures, that the game can use the amount of tokens, allowed by\ntoken holders. Note, that token holder may allow more tokens, that it holds, to more than one game.\n * After the tokens are used in prize, they are transfered to the game, and token holder apparently\nmay not use them before the prize is claimed or expired.\n * Contract also ensures the rotation of token holders, so that the last used token holder is placed\nto the end of the queue. It guarantees that all token holders have the same chance to participate in the\ngame.\n * Game requests the amount of tokens from GameController using amount_owner() method.\n * @author Aleksey Studnev <studnev@izx.io>",
                    "fullyImplemented": true,
                    "linearizedBaseContracts": [
                        836,
                        1934
                    ],
                    "name": "GameController",
                    "scope": 837
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
                                    "name": "TokenController",
                                    "referencedDeclaration": 1934,
                                    "type": "contract TokenController"
                                },
                                "id": 389,
                                "name": "UserDefinedTypeName",
                                "src": "985:15:2"
                            }
                        ],
                        "id": 390,
                        "name": "InheritanceSpecifier",
                        "src": "985:15:2"
                    },
                    {
                        "attributes": {
                            "canonicalName": "GameController.Balance",
                            "name": "Balance",
                            "scope": 836,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "key_index",
                                    "scope": 397,
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
                                        "id": 391,
                                        "name": "ElementaryTypeName",
                                        "src": "1033:4:2"
                                    }
                                ],
                                "id": 392,
                                "name": "VariableDeclaration",
                                "src": "1033:14:2"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "approved_amount",
                                    "scope": 397,
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
                                        "id": 393,
                                        "name": "ElementaryTypeName",
                                        "src": "1057:4:2"
                                    }
                                ],
                                "id": 394,
                                "name": "VariableDeclaration",
                                "src": "1057:20:2"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "reserved_amount",
                                    "scope": 397,
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
                                        "id": 395,
                                        "name": "ElementaryTypeName",
                                        "src": "1087:4:2"
                                    }
                                ],
                                "id": 396,
                                "name": "VariableDeclaration",
                                "src": "1087:20:2"
                            }
                        ],
                        "id": 397,
                        "name": "StructDefinition",
                        "src": "1008:106:2"
                    },
                    {
                        "attributes": {
                            "canonicalName": "GameController.Allowance",
                            "name": "Allowance",
                            "scope": 836,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "owners",
                                    "scope": 405,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "address[] storage pointer",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "length": null,
                                            "type": "address[] storage pointer"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 398,
                                                "name": "ElementaryTypeName",
                                                "src": "1146:7:2"
                                            }
                                        ],
                                        "id": 399,
                                        "name": "ArrayTypeName",
                                        "src": "1146:9:2"
                                    }
                                ],
                                "id": 400,
                                "name": "VariableDeclaration",
                                "src": "1146:16:2"
                            },
                            {
                                "attributes": {
                                    "constant": false,
                                    "name": "balances",
                                    "scope": 405,
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "type": "mapping(address => struct GameController.Balance storage ref)",
                                    "value": null,
                                    "visibility": "internal"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "type": "mapping(address => struct GameController.Balance storage ref)"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 401,
                                                "name": "ElementaryTypeName",
                                                "src": "1180:7:2"
                                            },
                                            {
                                                "attributes": {
                                                    "contractScope": null,
                                                    "name": "Balance",
                                                    "referencedDeclaration": 397,
                                                    "type": "struct GameController.Balance storage pointer"
                                                },
                                                "id": 402,
                                                "name": "UserDefinedTypeName",
                                                "src": "1191:7:2"
                                            }
                                        ],
                                        "id": 403,
                                        "name": "Mapping",
                                        "src": "1171:28:2"
                                    }
                                ],
                                "id": 404,
                                "name": "VariableDeclaration",
                                "src": "1171:37:2"
                            }
                        ],
                        "id": 405,
                        "name": "StructDefinition",
                        "src": "1120:95:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "master",
                            "scope": 836,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "address",
                                    "type": "address"
                                },
                                "id": 406,
                                "name": "ElementaryTypeName",
                                "src": "1221:7:2"
                            }
                        ],
                        "id": 407,
                        "name": "VariableDeclaration",
                        "src": "1221:21:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "token",
                            "scope": 836,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "contract ERC20",
                            "value": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "ERC20",
                                    "referencedDeclaration": 1902,
                                    "type": "contract ERC20"
                                },
                                "id": 408,
                                "name": "UserDefinedTypeName",
                                "src": "1248:5:2"
                            }
                        ],
                        "id": 409,
                        "name": "VariableDeclaration",
                        "src": "1248:20:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "allowances",
                            "scope": 836,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "mapping(address => struct GameController.Allowance storage ref)",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "type": "mapping(address => struct GameController.Allowance storage ref)"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "address",
                                            "type": "address"
                                        },
                                        "id": 410,
                                        "name": "ElementaryTypeName",
                                        "src": "1284:7:2"
                                    },
                                    {
                                        "attributes": {
                                            "contractScope": null,
                                            "name": "Allowance",
                                            "referencedDeclaration": 405,
                                            "type": "struct GameController.Allowance storage pointer"
                                        },
                                        "id": 411,
                                        "name": "UserDefinedTypeName",
                                        "src": "1295:9:2"
                                    }
                                ],
                                "id": 412,
                                "name": "Mapping",
                                "src": "1275:30:2"
                            }
                        ],
                        "id": 413,
                        "name": "VariableDeclaration",
                        "src": "1275:41:2"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": true,
                            "modifiers": [
                                null
                            ],
                            "name": "GameController",
                            "payable": false,
                            "scope": 836,
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
                                            "scope": 447,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "contract ERC20",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "contractScope": null,
                                                    "name": "ERC20",
                                                    "referencedDeclaration": 1902,
                                                    "type": "contract ERC20"
                                                },
                                                "id": 414,
                                                "name": "UserDefinedTypeName",
                                                "src": "1347:5:2"
                                            }
                                        ],
                                        "id": 415,
                                        "name": "VariableDeclaration",
                                        "src": "1347:12:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_master",
                                            "scope": 447,
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
                                                "id": 416,
                                                "name": "ElementaryTypeName",
                                                "src": "1361:7:2"
                                            }
                                        ],
                                        "id": 417,
                                        "name": "VariableDeclaration",
                                        "src": "1361:15:2"
                                    }
                                ],
                                "id": 418,
                                "name": "ParameterList",
                                "src": "1346:31:2"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 419,
                                "name": "ParameterList",
                                "src": "1385:0:2"
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
                                                            "referencedDeclaration": 2119,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 420,
                                                        "name": "Identifier",
                                                        "src": "1395:7:2"
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
                                                                    "referencedDeclaration": 417,
                                                                    "type": "address",
                                                                    "value": "_master"
                                                                },
                                                                "id": 421,
                                                                "name": "Identifier",
                                                                "src": "1403:7:2"
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
                                                                        "id": 422,
                                                                        "name": "ElementaryTypeNameExpression",
                                                                        "src": "1414:7:2"
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
                                                                        "id": 423,
                                                                        "name": "Literal",
                                                                        "src": "1422:1:2"
                                                                    }
                                                                ],
                                                                "id": 424,
                                                                "name": "FunctionCall",
                                                                "src": "1414:10:2"
                                                            }
                                                        ],
                                                        "id": 425,
                                                        "name": "BinaryOperation",
                                                        "src": "1403:21:2"
                                                    }
                                                ],
                                                "id": 426,
                                                "name": "FunctionCall",
                                                "src": "1395:30:2"
                                            }
                                        ],
                                        "id": 427,
                                        "name": "ExpressionStatement",
                                        "src": "1395:30:2"
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
                                                            "referencedDeclaration": 2119,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 428,
                                                        "name": "Identifier",
                                                        "src": "1435:7:2"
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
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
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
                                                                                    "typeIdentifier": "t_contract$_ERC20_$1902",
                                                                                    "typeString": "contract ERC20"
                                                                                }
                                                                            ],
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "type": "type(address)",
                                                                            "value": "address"
                                                                        },
                                                                        "id": 429,
                                                                        "name": "ElementaryTypeNameExpression",
                                                                        "src": "1443:7:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 415,
                                                                            "type": "contract ERC20",
                                                                            "value": "_token"
                                                                        },
                                                                        "id": 430,
                                                                        "name": "Identifier",
                                                                        "src": "1451:6:2"
                                                                    }
                                                                ],
                                                                "id": 431,
                                                                "name": "FunctionCall",
                                                                "src": "1443:15:2"
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
                                                                        "id": 432,
                                                                        "name": "ElementaryTypeNameExpression",
                                                                        "src": "1462:7:2"
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
                                                                        "id": 433,
                                                                        "name": "Literal",
                                                                        "src": "1470:1:2"
                                                                    }
                                                                ],
                                                                "id": 434,
                                                                "name": "FunctionCall",
                                                                "src": "1462:10:2"
                                                            }
                                                        ],
                                                        "id": 435,
                                                        "name": "BinaryOperation",
                                                        "src": "1443:29:2"
                                                    }
                                                ],
                                                "id": 436,
                                                "name": "FunctionCall",
                                                "src": "1435:38:2"
                                            }
                                        ],
                                        "id": 437,
                                        "name": "ExpressionStatement",
                                        "src": "1435:38:2"
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
                                                    "type": "address"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 407,
                                                            "type": "address",
                                                            "value": "master"
                                                        },
                                                        "id": 438,
                                                        "name": "Identifier",
                                                        "src": "1483:6:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 417,
                                                            "type": "address",
                                                            "value": "_master"
                                                        },
                                                        "id": 439,
                                                        "name": "Identifier",
                                                        "src": "1492:7:2"
                                                    }
                                                ],
                                                "id": 440,
                                                "name": "Assignment",
                                                "src": "1483:16:2"
                                            }
                                        ],
                                        "id": 441,
                                        "name": "ExpressionStatement",
                                        "src": "1483:16:2"
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
                                                    "type": "contract ERC20"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 409,
                                                            "type": "contract ERC20",
                                                            "value": "token"
                                                        },
                                                        "id": 442,
                                                        "name": "Identifier",
                                                        "src": "1509:5:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 415,
                                                            "type": "contract ERC20",
                                                            "value": "_token"
                                                        },
                                                        "id": 443,
                                                        "name": "Identifier",
                                                        "src": "1517:6:2"
                                                    }
                                                ],
                                                "id": 444,
                                                "name": "Assignment",
                                                "src": "1509:14:2"
                                            }
                                        ],
                                        "id": 445,
                                        "name": "ExpressionStatement",
                                        "src": "1509:14:2"
                                    }
                                ],
                                "id": 446,
                                "name": "Block",
                                "src": "1385:145:2"
                            }
                        ],
                        "id": 447,
                        "name": "FunctionDefinition",
                        "src": "1323:207:2"
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
                            "scope": 836,
                            "stateMutability": "nonpayable",
                            "superFunction": 1933,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_owner",
                                            "scope": 516,
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
                                                "id": 448,
                                                "name": "ElementaryTypeName",
                                                "src": "1555:7:2"
                                            }
                                        ],
                                        "id": 449,
                                        "name": "VariableDeclaration",
                                        "src": "1555:14:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_spender",
                                            "scope": 516,
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
                                                "id": 450,
                                                "name": "ElementaryTypeName",
                                                "src": "1571:7:2"
                                            }
                                        ],
                                        "id": 451,
                                        "name": "VariableDeclaration",
                                        "src": "1571:16:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_amount",
                                            "scope": 516,
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
                                                "id": 452,
                                                "name": "ElementaryTypeName",
                                                "src": "1589:4:2"
                                            }
                                        ],
                                        "id": 453,
                                        "name": "VariableDeclaration",
                                        "src": "1589:12:2"
                                    }
                                ],
                                "id": 454,
                                "name": "ParameterList",
                                "src": "1554:48:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 516,
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
                                                "id": 455,
                                                "name": "ElementaryTypeName",
                                                "src": "1618:4:2"
                                            }
                                        ],
                                        "id": 456,
                                        "name": "VariableDeclaration",
                                        "src": "1618:4:2"
                                    }
                                ],
                                "id": 457,
                                "name": "ParameterList",
                                "src": "1617:6:2"
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
                                                            "referencedDeclaration": 2119,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 458,
                                                        "name": "Identifier",
                                                        "src": "1633:7:2"
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
                                                            "operator": "==",
                                                            "type": "bool"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "sender",
                                                                    "referencedDeclaration": null,
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2116,
                                                                            "type": "msg",
                                                                            "value": "msg"
                                                                        },
                                                                        "id": 459,
                                                                        "name": "Identifier",
                                                                        "src": "1641:3:2"
                                                                    }
                                                                ],
                                                                "id": 460,
                                                                "name": "MemberAccess",
                                                                "src": "1641:10:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 407,
                                                                    "type": "address",
                                                                    "value": "master"
                                                                },
                                                                "id": 461,
                                                                "name": "Identifier",
                                                                "src": "1653:6:2"
                                                            }
                                                        ],
                                                        "id": 462,
                                                        "name": "BinaryOperation",
                                                        "src": "1641:18:2"
                                                    }
                                                ],
                                                "id": 463,
                                                "name": "FunctionCall",
                                                "src": "1633:27:2"
                                            }
                                        ],
                                        "id": 464,
                                        "name": "ExpressionStatement",
                                        "src": "1633:27:2"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                466
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "allowance",
                                                    "scope": 516,
                                                    "stateVariable": false,
                                                    "storageLocation": "storage",
                                                    "type": "struct GameController.Allowance storage pointer",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "contractScope": null,
                                                            "name": "Allowance",
                                                            "referencedDeclaration": 405,
                                                            "type": "struct GameController.Allowance storage pointer"
                                                        },
                                                        "id": 465,
                                                        "name": "UserDefinedTypeName",
                                                        "src": "1671:9:2"
                                                    }
                                                ],
                                                "id": 466,
                                                "name": "VariableDeclaration",
                                                "src": "1671:27:2"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "struct GameController.Allowance storage ref"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 413,
                                                            "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                            "value": "allowances"
                                                        },
                                                        "id": 467,
                                                        "name": "Identifier",
                                                        "src": "1701:10:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 451,
                                                            "type": "address",
                                                            "value": "_spender"
                                                        },
                                                        "id": 468,
                                                        "name": "Identifier",
                                                        "src": "1712:8:2"
                                                    }
                                                ],
                                                "id": 469,
                                                "name": "IndexAccess",
                                                "src": "1701:20:2"
                                            }
                                        ],
                                        "id": 470,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1671:50:2"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                472
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "balance",
                                                    "scope": 516,
                                                    "stateVariable": false,
                                                    "storageLocation": "storage",
                                                    "type": "struct GameController.Balance storage pointer",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "contractScope": null,
                                                            "name": "Balance",
                                                            "referencedDeclaration": 397,
                                                            "type": "struct GameController.Balance storage pointer"
                                                        },
                                                        "id": 471,
                                                        "name": "UserDefinedTypeName",
                                                        "src": "1731:7:2"
                                                    }
                                                ],
                                                "id": 472,
                                                "name": "VariableDeclaration",
                                                "src": "1731:23:2"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "struct GameController.Balance storage ref"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "balances",
                                                            "referencedDeclaration": 404,
                                                            "type": "mapping(address => struct GameController.Balance storage ref)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 466,
                                                                    "type": "struct GameController.Allowance storage pointer",
                                                                    "value": "allowance"
                                                                },
                                                                "id": 473,
                                                                "name": "Identifier",
                                                                "src": "1757:9:2"
                                                            }
                                                        ],
                                                        "id": 474,
                                                        "name": "MemberAccess",
                                                        "src": "1757:18:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 449,
                                                            "type": "address",
                                                            "value": "_owner"
                                                        },
                                                        "id": 475,
                                                        "name": "Identifier",
                                                        "src": "1776:6:2"
                                                    }
                                                ],
                                                "id": 476,
                                                "name": "IndexAccess",
                                                "src": "1757:26:2"
                                            }
                                        ],
                                        "id": 477,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1731:52:2"
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
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
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
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "key_index",
                                                            "referencedDeclaration": 392,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 472,
                                                                    "type": "struct GameController.Balance storage pointer",
                                                                    "value": "balance"
                                                                },
                                                                "id": 478,
                                                                "name": "Identifier",
                                                                "src": "1797:7:2"
                                                            }
                                                        ],
                                                        "id": 479,
                                                        "name": "MemberAccess",
                                                        "src": "1797:17:2"
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
                                                        "id": 480,
                                                        "name": "Literal",
                                                        "src": "1816:1:2"
                                                    }
                                                ],
                                                "id": 481,
                                                "name": "BinaryOperation",
                                                "src": "1797:20:2"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "assignments": [
                                                                483
                                                            ]
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "constant": false,
                                                                    "name": "next",
                                                                    "scope": 516,
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
                                                                        "id": 482,
                                                                        "name": "ElementaryTypeName",
                                                                        "src": "1832:4:2"
                                                                    }
                                                                ],
                                                                "id": 483,
                                                                "name": "VariableDeclaration",
                                                                "src": "1832:9:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "operator": "++",
                                                                    "prefix": false,
                                                                    "type": "uint256"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "member_name": "length",
                                                                            "referencedDeclaration": null,
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": true,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "member_name": "owners",
                                                                                    "referencedDeclaration": 400,
                                                                                    "type": "address[] storage ref"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 466,
                                                                                            "type": "struct GameController.Allowance storage pointer",
                                                                                            "value": "allowance"
                                                                                        },
                                                                                        "id": 484,
                                                                                        "name": "Identifier",
                                                                                        "src": "1844:9:2"
                                                                                    }
                                                                                ],
                                                                                "id": 485,
                                                                                "name": "MemberAccess",
                                                                                "src": "1844:16:2"
                                                                            }
                                                                        ],
                                                                        "id": 486,
                                                                        "name": "MemberAccess",
                                                                        "src": "1844:23:2"
                                                                    }
                                                                ],
                                                                "id": 487,
                                                                "name": "UnaryOperation",
                                                                "src": "1844:25:2"
                                                            }
                                                        ],
                                                        "id": 488,
                                                        "name": "VariableDeclarationStatement",
                                                        "src": "1832:37:2"
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
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "type": "address"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": true,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "member_name": "owners",
                                                                                    "referencedDeclaration": 400,
                                                                                    "type": "address[] storage ref"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 466,
                                                                                            "type": "struct GameController.Allowance storage pointer",
                                                                                            "value": "allowance"
                                                                                        },
                                                                                        "id": 489,
                                                                                        "name": "Identifier",
                                                                                        "src": "1883:9:2"
                                                                                    }
                                                                                ],
                                                                                "id": 492,
                                                                                "name": "MemberAccess",
                                                                                "src": "1883:16:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 483,
                                                                                    "type": "uint256",
                                                                                    "value": "next"
                                                                                },
                                                                                "id": 491,
                                                                                "name": "Identifier",
                                                                                "src": "1900:4:2"
                                                                            }
                                                                        ],
                                                                        "id": 493,
                                                                        "name": "IndexAccess",
                                                                        "src": "1883:22:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 449,
                                                                            "type": "address",
                                                                            "value": "_owner"
                                                                        },
                                                                        "id": 494,
                                                                        "name": "Identifier",
                                                                        "src": "1908:6:2"
                                                                    }
                                                                ],
                                                                "id": 495,
                                                                "name": "Assignment",
                                                                "src": "1883:31:2"
                                                            }
                                                        ],
                                                        "id": 496,
                                                        "name": "ExpressionStatement",
                                                        "src": "1883:31:2"
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
                                                                    "type": "uint256"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "member_name": "key_index",
                                                                            "referencedDeclaration": 392,
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 472,
                                                                                    "type": "struct GameController.Balance storage pointer",
                                                                                    "value": "balance"
                                                                                },
                                                                                "id": 497,
                                                                                "name": "Identifier",
                                                                                "src": "1928:7:2"
                                                                            }
                                                                        ],
                                                                        "id": 499,
                                                                        "name": "MemberAccess",
                                                                        "src": "1928:17:2"
                                                                    },
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
                                                                            "operator": "+",
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 483,
                                                                                    "type": "uint256",
                                                                                    "value": "next"
                                                                                },
                                                                                "id": 500,
                                                                                "name": "Identifier",
                                                                                "src": "1948:4:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "hexvalue": "31",
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "subdenomination": null,
                                                                                    "token": "number",
                                                                                    "type": "int_const 1",
                                                                                    "value": "1"
                                                                                },
                                                                                "id": 501,
                                                                                "name": "Literal",
                                                                                "src": "1955:1:2"
                                                                            }
                                                                        ],
                                                                        "id": 502,
                                                                        "name": "BinaryOperation",
                                                                        "src": "1948:8:2"
                                                                    }
                                                                ],
                                                                "id": 503,
                                                                "name": "Assignment",
                                                                "src": "1928:28:2"
                                                            }
                                                        ],
                                                        "id": 504,
                                                        "name": "ExpressionStatement",
                                                        "src": "1928:28:2"
                                                    }
                                                ],
                                                "id": 505,
                                                "name": "Block",
                                                "src": "1818:149:2"
                                            }
                                        ],
                                        "id": 506,
                                        "name": "IfStatement",
                                        "src": "1794:173:2"
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
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "member_name": "approved_amount",
                                                            "referencedDeclaration": 394,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 472,
                                                                    "type": "struct GameController.Balance storage pointer",
                                                                    "value": "balance"
                                                                },
                                                                "id": 507,
                                                                "name": "Identifier",
                                                                "src": "1977:7:2"
                                                            }
                                                        ],
                                                        "id": 509,
                                                        "name": "MemberAccess",
                                                        "src": "1977:23:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 453,
                                                            "type": "uint256",
                                                            "value": "_amount"
                                                        },
                                                        "id": 510,
                                                        "name": "Identifier",
                                                        "src": "2003:7:2"
                                                    }
                                                ],
                                                "id": 511,
                                                "name": "Assignment",
                                                "src": "1977:33:2"
                                            }
                                        ],
                                        "id": 512,
                                        "name": "ExpressionStatement",
                                        "src": "1977:33:2"
                                    },
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 457
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
                                                "id": 513,
                                                "name": "Literal",
                                                "src": "2028:4:2"
                                            }
                                        ],
                                        "id": 514,
                                        "name": "Return",
                                        "src": "2021:11:2"
                                    }
                                ],
                                "id": 515,
                                "name": "Block",
                                "src": "1623:416:2"
                            }
                        ],
                        "id": 516,
                        "name": "FunctionDefinition",
                        "src": "1536:503:2"
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
                            "scope": 836,
                            "stateMutability": "nonpayable",
                            "superFunction": 1922,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_from",
                                            "scope": 648,
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
                                                "id": 517,
                                                "name": "ElementaryTypeName",
                                                "src": "2065:7:2"
                                            }
                                        ],
                                        "id": 518,
                                        "name": "VariableDeclaration",
                                        "src": "2065:13:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_to",
                                            "scope": 648,
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
                                                "id": 519,
                                                "name": "ElementaryTypeName",
                                                "src": "2080:7:2"
                                            }
                                        ],
                                        "id": 520,
                                        "name": "VariableDeclaration",
                                        "src": "2080:11:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_amount",
                                            "scope": 648,
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
                                                "id": 521,
                                                "name": "ElementaryTypeName",
                                                "src": "2093:4:2"
                                            }
                                        ],
                                        "id": 522,
                                        "name": "VariableDeclaration",
                                        "src": "2093:12:2"
                                    }
                                ],
                                "id": 523,
                                "name": "ParameterList",
                                "src": "2064:42:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 648,
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
                                                "id": 524,
                                                "name": "ElementaryTypeName",
                                                "src": "2122:4:2"
                                            }
                                        ],
                                        "id": 525,
                                        "name": "VariableDeclaration",
                                        "src": "2122:4:2"
                                    }
                                ],
                                "id": 526,
                                "name": "ParameterList",
                                "src": "2121:6:2"
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
                                                            "referencedDeclaration": 2119,
                                                            "type": "function (bool) pure",
                                                            "value": "require"
                                                        },
                                                        "id": 527,
                                                        "name": "Identifier",
                                                        "src": "2137:7:2"
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
                                                            "operator": "==",
                                                            "type": "bool"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "sender",
                                                                    "referencedDeclaration": null,
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2116,
                                                                            "type": "msg",
                                                                            "value": "msg"
                                                                        },
                                                                        "id": 528,
                                                                        "name": "Identifier",
                                                                        "src": "2145:3:2"
                                                                    }
                                                                ],
                                                                "id": 529,
                                                                "name": "MemberAccess",
                                                                "src": "2145:10:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 407,
                                                                    "type": "address",
                                                                    "value": "master"
                                                                },
                                                                "id": 530,
                                                                "name": "Identifier",
                                                                "src": "2157:6:2"
                                                            }
                                                        ],
                                                        "id": 531,
                                                        "name": "BinaryOperation",
                                                        "src": "2145:18:2"
                                                    }
                                                ],
                                                "id": 532,
                                                "name": "FunctionCall",
                                                "src": "2137:27:2"
                                            }
                                        ],
                                        "id": 533,
                                        "name": "ExpressionStatement",
                                        "src": "2137:27:2"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                535
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "allowance",
                                                    "scope": 648,
                                                    "stateVariable": false,
                                                    "storageLocation": "storage",
                                                    "type": "struct GameController.Allowance storage pointer",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "contractScope": null,
                                                            "name": "Allowance",
                                                            "referencedDeclaration": 405,
                                                            "type": "struct GameController.Allowance storage pointer"
                                                        },
                                                        "id": 534,
                                                        "name": "UserDefinedTypeName",
                                                        "src": "2175:9:2"
                                                    }
                                                ],
                                                "id": 535,
                                                "name": "VariableDeclaration",
                                                "src": "2175:27:2"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "struct GameController.Allowance storage ref"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 413,
                                                            "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                            "value": "allowances"
                                                        },
                                                        "id": 536,
                                                        "name": "Identifier",
                                                        "src": "2205:10:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 520,
                                                            "type": "address",
                                                            "value": "_to"
                                                        },
                                                        "id": 537,
                                                        "name": "Identifier",
                                                        "src": "2216:3:2"
                                                    }
                                                ],
                                                "id": 538,
                                                "name": "IndexAccess",
                                                "src": "2205:15:2"
                                            }
                                        ],
                                        "id": 539,
                                        "name": "VariableDeclarationStatement",
                                        "src": "2175:45:2"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                541
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "balance",
                                                    "scope": 648,
                                                    "stateVariable": false,
                                                    "storageLocation": "storage",
                                                    "type": "struct GameController.Balance storage pointer",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "contractScope": null,
                                                            "name": "Balance",
                                                            "referencedDeclaration": 397,
                                                            "type": "struct GameController.Balance storage pointer"
                                                        },
                                                        "id": 540,
                                                        "name": "UserDefinedTypeName",
                                                        "src": "2230:7:2"
                                                    }
                                                ],
                                                "id": 541,
                                                "name": "VariableDeclaration",
                                                "src": "2230:23:2"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "struct GameController.Balance storage ref"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "balances",
                                                            "referencedDeclaration": 404,
                                                            "type": "mapping(address => struct GameController.Balance storage ref)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 535,
                                                                    "type": "struct GameController.Allowance storage pointer",
                                                                    "value": "allowance"
                                                                },
                                                                "id": 542,
                                                                "name": "Identifier",
                                                                "src": "2256:9:2"
                                                            }
                                                        ],
                                                        "id": 543,
                                                        "name": "MemberAccess",
                                                        "src": "2256:18:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 518,
                                                            "type": "address",
                                                            "value": "_from"
                                                        },
                                                        "id": 544,
                                                        "name": "Identifier",
                                                        "src": "2275:5:2"
                                                    }
                                                ],
                                                "id": 545,
                                                "name": "IndexAccess",
                                                "src": "2256:25:2"
                                            }
                                        ],
                                        "id": 546,
                                        "name": "VariableDeclarationStatement",
                                        "src": "2230:51:2"
                                    },
                                    {
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
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "key_index",
                                                            "referencedDeclaration": 392,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 541,
                                                                    "type": "struct GameController.Balance storage pointer",
                                                                    "value": "balance"
                                                                },
                                                                "id": 547,
                                                                "name": "Identifier",
                                                                "src": "2295:7:2"
                                                            }
                                                        ],
                                                        "id": 548,
                                                        "name": "MemberAccess",
                                                        "src": "2295:17:2"
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
                                                        "id": 549,
                                                        "name": "Literal",
                                                        "src": "2313:1:2"
                                                    }
                                                ],
                                                "id": 550,
                                                "name": "BinaryOperation",
                                                "src": "2295:19:2"
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
                                                                    "operator": "+=",
                                                                    "type": "uint256"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "member_name": "reserved_amount",
                                                                            "referencedDeclaration": 396,
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 541,
                                                                                    "type": "struct GameController.Balance storage pointer",
                                                                                    "value": "balance"
                                                                                },
                                                                                "id": 551,
                                                                                "name": "Identifier",
                                                                                "src": "2330:7:2"
                                                                            }
                                                                        ],
                                                                        "id": 553,
                                                                        "name": "MemberAccess",
                                                                        "src": "2330:23:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 522,
                                                                            "type": "uint256",
                                                                            "value": "_amount"
                                                                        },
                                                                        "id": 554,
                                                                        "name": "Identifier",
                                                                        "src": "2357:7:2"
                                                                    }
                                                                ],
                                                                "id": 555,
                                                                "name": "Assignment",
                                                                "src": "2330:34:2"
                                                            }
                                                        ],
                                                        "id": 556,
                                                        "name": "ExpressionStatement",
                                                        "src": "2330:34:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "assignments": [
                                                                560
                                                            ]
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "constant": false,
                                                                    "name": "owners",
                                                                    "scope": 648,
                                                                    "stateVariable": false,
                                                                    "storageLocation": "storage",
                                                                    "type": "address[] storage pointer",
                                                                    "value": null,
                                                                    "visibility": "internal"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "length": null,
                                                                            "type": "address[] storage pointer"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "name": "address",
                                                                                    "type": "address"
                                                                                },
                                                                                "id": 558,
                                                                                "name": "ElementaryTypeName",
                                                                                "src": "2378:7:2"
                                                                            }
                                                                        ],
                                                                        "id": 559,
                                                                        "name": "ArrayTypeName",
                                                                        "src": "2378:9:2"
                                                                    }
                                                                ],
                                                                "id": 560,
                                                                "name": "VariableDeclaration",
                                                                "src": "2378:24:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "owners",
                                                                    "referencedDeclaration": 400,
                                                                    "type": "address[] storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 535,
                                                                            "type": "struct GameController.Allowance storage pointer",
                                                                            "value": "allowance"
                                                                        },
                                                                        "id": 561,
                                                                        "name": "Identifier",
                                                                        "src": "2405:9:2"
                                                                    }
                                                                ],
                                                                "id": 562,
                                                                "name": "MemberAccess",
                                                                "src": "2405:16:2"
                                                            }
                                                        ],
                                                        "id": 563,
                                                        "name": "VariableDeclarationStatement",
                                                        "src": "2378:43:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "assignments": [
                                                                565
                                                            ]
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "constant": false,
                                                                    "name": "switch_index",
                                                                    "scope": 648,
                                                                    "stateVariable": false,
                                                                    "storageLocation": "default",
                                                                    "type": "uint256",
                                                                    "value": null,
                                                                    "visibility": "internal"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "name": "uint256",
                                                                            "type": "uint256"
                                                                        },
                                                                        "id": 564,
                                                                        "name": "ElementaryTypeName",
                                                                        "src": "2436:7:2"
                                                                    }
                                                                ],
                                                                "id": 565,
                                                                "name": "VariableDeclaration",
                                                                "src": "2436:20:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isInlineArray": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "uint256"
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
                                                                            "operator": "%",
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "member_name": "timestamp",
                                                                                    "referencedDeclaration": null,
                                                                                    "type": "uint256"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 2108,
                                                                                            "type": "block",
                                                                                            "value": "block"
                                                                                        },
                                                                                        "id": 566,
                                                                                        "name": "Identifier",
                                                                                        "src": "2460:5:2"
                                                                                    }
                                                                                ],
                                                                                "id": 567,
                                                                                "name": "MemberAccess",
                                                                                "src": "2460:15:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": true,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "member_name": "length",
                                                                                    "referencedDeclaration": null,
                                                                                    "type": "uint256"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 560,
                                                                                            "type": "address[] storage pointer",
                                                                                            "value": "owners"
                                                                                        },
                                                                                        "id": 568,
                                                                                        "name": "Identifier",
                                                                                        "src": "2478:6:2"
                                                                                    }
                                                                                ],
                                                                                "id": 569,
                                                                                "name": "MemberAccess",
                                                                                "src": "2478:13:2"
                                                                            }
                                                                        ],
                                                                        "id": 570,
                                                                        "name": "BinaryOperation",
                                                                        "src": "2460:31:2"
                                                                    }
                                                                ],
                                                                "id": 571,
                                                                "name": "TupleExpression",
                                                                "src": "2459:33:2"
                                                            }
                                                        ],
                                                        "id": 572,
                                                        "name": "VariableDeclarationStatement",
                                                        "src": "2436:56:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "assignments": [
                                                                574
                                                            ]
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "constant": false,
                                                                    "name": "switch_owner",
                                                                    "scope": 648,
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
                                                                        "id": 573,
                                                                        "name": "ElementaryTypeName",
                                                                        "src": "2506:7:2"
                                                                    }
                                                                ],
                                                                "id": 574,
                                                                "name": "VariableDeclaration",
                                                                "src": "2506:20:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 560,
                                                                            "type": "address[] storage pointer",
                                                                            "value": "owners"
                                                                        },
                                                                        "id": 575,
                                                                        "name": "Identifier",
                                                                        "src": "2529:6:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 565,
                                                                            "type": "uint256",
                                                                            "value": "switch_index"
                                                                        },
                                                                        "id": 576,
                                                                        "name": "Identifier",
                                                                        "src": "2536:12:2"
                                                                    }
                                                                ],
                                                                "id": 577,
                                                                "name": "IndexAccess",
                                                                "src": "2529:20:2"
                                                            }
                                                        ],
                                                        "id": 578,
                                                        "name": "VariableDeclarationStatement",
                                                        "src": "2506:43:2"
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
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "type": "address"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 560,
                                                                                    "type": "address[] storage pointer",
                                                                                    "value": "owners"
                                                                                },
                                                                                "id": 579,
                                                                                "name": "Identifier",
                                                                                "src": "2564:6:2"
                                                                            },
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
                                                                                    "operator": "-",
                                                                                    "type": "uint256"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "member_name": "key_index",
                                                                                            "referencedDeclaration": 392,
                                                                                            "type": "uint256"
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 541,
                                                                                                    "type": "struct GameController.Balance storage pointer",
                                                                                                    "value": "balance"
                                                                                                },
                                                                                                "id": 580,
                                                                                                "name": "Identifier",
                                                                                                "src": "2571:7:2"
                                                                                            }
                                                                                        ],
                                                                                        "id": 581,
                                                                                        "name": "MemberAccess",
                                                                                        "src": "2571:17:2"
                                                                                    },
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "hexvalue": "31",
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": true,
                                                                                            "lValueRequested": false,
                                                                                            "subdenomination": null,
                                                                                            "token": "number",
                                                                                            "type": "int_const 1",
                                                                                            "value": "1"
                                                                                        },
                                                                                        "id": 582,
                                                                                        "name": "Literal",
                                                                                        "src": "2589:1:2"
                                                                                    }
                                                                                ],
                                                                                "id": 583,
                                                                                "name": "BinaryOperation",
                                                                                "src": "2571:19:2"
                                                                            }
                                                                        ],
                                                                        "id": 584,
                                                                        "name": "IndexAccess",
                                                                        "src": "2564:27:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 574,
                                                                            "type": "address",
                                                                            "value": "switch_owner"
                                                                        },
                                                                        "id": 585,
                                                                        "name": "Identifier",
                                                                        "src": "2594:12:2"
                                                                    }
                                                                ],
                                                                "id": 586,
                                                                "name": "Assignment",
                                                                "src": "2564:42:2"
                                                            }
                                                        ],
                                                        "id": 587,
                                                        "name": "ExpressionStatement",
                                                        "src": "2564:42:2"
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
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "type": "address"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 560,
                                                                                    "type": "address[] storage pointer",
                                                                                    "value": "owners"
                                                                                },
                                                                                "id": 588,
                                                                                "name": "Identifier",
                                                                                "src": "2620:6:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 565,
                                                                                    "type": "uint256",
                                                                                    "value": "switch_index"
                                                                                },
                                                                                "id": 589,
                                                                                "name": "Identifier",
                                                                                "src": "2627:12:2"
                                                                            }
                                                                        ],
                                                                        "id": 590,
                                                                        "name": "IndexAccess",
                                                                        "src": "2620:20:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 518,
                                                                            "type": "address",
                                                                            "value": "_from"
                                                                        },
                                                                        "id": 591,
                                                                        "name": "Identifier",
                                                                        "src": "2643:5:2"
                                                                    }
                                                                ],
                                                                "id": 592,
                                                                "name": "Assignment",
                                                                "src": "2620:28:2"
                                                            }
                                                        ],
                                                        "id": 593,
                                                        "name": "ExpressionStatement",
                                                        "src": "2620:28:2"
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
                                                                    "type": "uint256"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "member_name": "key_index",
                                                                            "referencedDeclaration": 392,
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": true,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "type": "struct GameController.Balance storage ref"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "member_name": "balances",
                                                                                            "referencedDeclaration": 404,
                                                                                            "type": "mapping(address => struct GameController.Balance storage ref)"
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 535,
                                                                                                    "type": "struct GameController.Allowance storage pointer",
                                                                                                    "value": "allowance"
                                                                                                },
                                                                                                "id": 594,
                                                                                                "name": "Identifier",
                                                                                                "src": "2663:9:2"
                                                                                            }
                                                                                        ],
                                                                                        "id": 597,
                                                                                        "name": "MemberAccess",
                                                                                        "src": "2663:18:2"
                                                                                    },
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 574,
                                                                                            "type": "address",
                                                                                            "value": "switch_owner"
                                                                                        },
                                                                                        "id": 596,
                                                                                        "name": "Identifier",
                                                                                        "src": "2682:12:2"
                                                                                    }
                                                                                ],
                                                                                "id": 598,
                                                                                "name": "IndexAccess",
                                                                                "src": "2663:32:2"
                                                                            }
                                                                        ],
                                                                        "id": 599,
                                                                        "name": "MemberAccess",
                                                                        "src": "2663:42:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "member_name": "key_index",
                                                                            "referencedDeclaration": 392,
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 541,
                                                                                    "type": "struct GameController.Balance storage pointer",
                                                                                    "value": "balance"
                                                                                },
                                                                                "id": 600,
                                                                                "name": "Identifier",
                                                                                "src": "2708:7:2"
                                                                            }
                                                                        ],
                                                                        "id": 601,
                                                                        "name": "MemberAccess",
                                                                        "src": "2708:17:2"
                                                                    }
                                                                ],
                                                                "id": 602,
                                                                "name": "Assignment",
                                                                "src": "2663:62:2"
                                                            }
                                                        ],
                                                        "id": 603,
                                                        "name": "ExpressionStatement",
                                                        "src": "2663:62:2"
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
                                                                    "type": "uint256"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "member_name": "key_index",
                                                                            "referencedDeclaration": 392,
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 541,
                                                                                    "type": "struct GameController.Balance storage pointer",
                                                                                    "value": "balance"
                                                                                },
                                                                                "id": 604,
                                                                                "name": "Identifier",
                                                                                "src": "2739:7:2"
                                                                            }
                                                                        ],
                                                                        "id": 606,
                                                                        "name": "MemberAccess",
                                                                        "src": "2739:17:2"
                                                                    },
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
                                                                            "operator": "+",
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 565,
                                                                                    "type": "uint256",
                                                                                    "value": "switch_index"
                                                                                },
                                                                                "id": 607,
                                                                                "name": "Identifier",
                                                                                "src": "2759:12:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "hexvalue": "31",
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "subdenomination": null,
                                                                                    "token": "number",
                                                                                    "type": "int_const 1",
                                                                                    "value": "1"
                                                                                },
                                                                                "id": 608,
                                                                                "name": "Literal",
                                                                                "src": "2774:1:2"
                                                                            }
                                                                        ],
                                                                        "id": 609,
                                                                        "name": "BinaryOperation",
                                                                        "src": "2759:16:2"
                                                                    }
                                                                ],
                                                                "id": 610,
                                                                "name": "Assignment",
                                                                "src": "2739:36:2"
                                                            }
                                                        ],
                                                        "id": 611,
                                                        "name": "ExpressionStatement",
                                                        "src": "2739:36:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "functionReturnParameters": 526
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
                                                                "id": 612,
                                                                "name": "Literal",
                                                                "src": "2797:4:2"
                                                            }
                                                        ],
                                                        "id": 613,
                                                        "name": "Return",
                                                        "src": "2790:11:2"
                                                    }
                                                ],
                                                "id": 614,
                                                "name": "Block",
                                                "src": "2315:497:2"
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
                                                                    "type": "struct GameController.Allowance storage pointer"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 535,
                                                                            "type": "struct GameController.Allowance storage pointer",
                                                                            "value": "allowance"
                                                                        },
                                                                        "id": 615,
                                                                        "name": "Identifier",
                                                                        "src": "2830:9:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "type": "struct GameController.Allowance storage ref"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 413,
                                                                                    "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                                                    "value": "allowances"
                                                                                },
                                                                                "id": 616,
                                                                                "name": "Identifier",
                                                                                "src": "2842:10:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 518,
                                                                                    "type": "address",
                                                                                    "value": "_from"
                                                                                },
                                                                                "id": 617,
                                                                                "name": "Identifier",
                                                                                "src": "2853:5:2"
                                                                            }
                                                                        ],
                                                                        "id": 618,
                                                                        "name": "IndexAccess",
                                                                        "src": "2842:17:2"
                                                                    }
                                                                ],
                                                                "id": 619,
                                                                "name": "Assignment",
                                                                "src": "2830:29:2"
                                                            }
                                                        ],
                                                        "id": 620,
                                                        "name": "ExpressionStatement",
                                                        "src": "2830:29:2"
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
                                                                    "type": "struct GameController.Balance storage pointer"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 541,
                                                                            "type": "struct GameController.Balance storage pointer",
                                                                            "value": "balance"
                                                                        },
                                                                        "id": 621,
                                                                        "name": "Identifier",
                                                                        "src": "2873:7:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "type": "struct GameController.Balance storage ref"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": true,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "member_name": "balances",
                                                                                    "referencedDeclaration": 404,
                                                                                    "type": "mapping(address => struct GameController.Balance storage ref)"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 535,
                                                                                            "type": "struct GameController.Allowance storage pointer",
                                                                                            "value": "allowance"
                                                                                        },
                                                                                        "id": 622,
                                                                                        "name": "Identifier",
                                                                                        "src": "2883:9:2"
                                                                                    }
                                                                                ],
                                                                                "id": 623,
                                                                                "name": "MemberAccess",
                                                                                "src": "2883:18:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 520,
                                                                                    "type": "address",
                                                                                    "value": "_to"
                                                                                },
                                                                                "id": 624,
                                                                                "name": "Identifier",
                                                                                "src": "2902:3:2"
                                                                            }
                                                                        ],
                                                                        "id": 625,
                                                                        "name": "IndexAccess",
                                                                        "src": "2883:23:2"
                                                                    }
                                                                ],
                                                                "id": 626,
                                                                "name": "Assignment",
                                                                "src": "2873:33:2"
                                                            }
                                                        ],
                                                        "id": 627,
                                                        "name": "ExpressionStatement",
                                                        "src": "2873:33:2"
                                                    },
                                                    {
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
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "member_name": "key_index",
                                                                            "referencedDeclaration": 392,
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 541,
                                                                                    "type": "struct GameController.Balance storage pointer",
                                                                                    "value": "balance"
                                                                                },
                                                                                "id": 628,
                                                                                "name": "Identifier",
                                                                                "src": "2924:7:2"
                                                                            }
                                                                        ],
                                                                        "id": 629,
                                                                        "name": "MemberAccess",
                                                                        "src": "2924:17:2"
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
                                                                        "id": 630,
                                                                        "name": "Literal",
                                                                        "src": "2942:1:2"
                                                                    }
                                                                ],
                                                                "id": 631,
                                                                "name": "BinaryOperation",
                                                                "src": "2924:19:2"
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
                                                                                    "operator": "-=",
                                                                                    "type": "uint256"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": true,
                                                                                            "member_name": "reserved_amount",
                                                                                            "referencedDeclaration": 396,
                                                                                            "type": "uint256"
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 541,
                                                                                                    "type": "struct GameController.Balance storage pointer",
                                                                                                    "value": "balance"
                                                                                                },
                                                                                                "id": 632,
                                                                                                "name": "Identifier",
                                                                                                "src": "2962:7:2"
                                                                                            }
                                                                                        ],
                                                                                        "id": 634,
                                                                                        "name": "MemberAccess",
                                                                                        "src": "2962:23:2"
                                                                                    },
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 522,
                                                                                            "type": "uint256",
                                                                                            "value": "_amount"
                                                                                        },
                                                                                        "id": 635,
                                                                                        "name": "Identifier",
                                                                                        "src": "2989:7:2"
                                                                                    }
                                                                                ],
                                                                                "id": 636,
                                                                                "name": "Assignment",
                                                                                "src": "2962:34:2"
                                                                            }
                                                                        ],
                                                                        "id": 637,
                                                                        "name": "ExpressionStatement",
                                                                        "src": "2962:34:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "functionReturnParameters": 526
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
                                                                                "id": 638,
                                                                                "name": "Literal",
                                                                                "src": "3021:4:2"
                                                                            }
                                                                        ],
                                                                        "id": 639,
                                                                        "name": "Return",
                                                                        "src": "3014:11:2"
                                                                    }
                                                                ],
                                                                "id": 640,
                                                                "name": "Block",
                                                                "src": "2944:96:2"
                                                            },
                                                            {
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "functionReturnParameters": 526
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
                                                                                "id": 641,
                                                                                "name": "Literal",
                                                                                "src": "3069:5:2"
                                                                            }
                                                                        ],
                                                                        "id": 642,
                                                                        "name": "Return",
                                                                        "src": "3062:12:2"
                                                                    }
                                                                ],
                                                                "id": 643,
                                                                "name": "Block",
                                                                "src": "3044:45:2"
                                                            }
                                                        ],
                                                        "id": 644,
                                                        "name": "IfStatement",
                                                        "src": "2921:168:2"
                                                    }
                                                ],
                                                "id": 645,
                                                "name": "Block",
                                                "src": "2816:284:2"
                                            }
                                        ],
                                        "id": 646,
                                        "name": "IfStatement",
                                        "src": "2292:808:2"
                                    }
                                ],
                                "id": 647,
                                "name": "Block",
                                "src": "2127:979:2"
                            }
                        ],
                        "id": 648,
                        "name": "FunctionDefinition",
                        "src": "2045:1061:2"
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
                            "scope": 836,
                            "stateMutability": "payable",
                            "superFunction": 1911,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
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
                                                "id": 649,
                                                "name": "ElementaryTypeName",
                                                "src": "3134:7:2"
                                            }
                                        ],
                                        "id": 650,
                                        "name": "VariableDeclaration",
                                        "src": "3134:7:2"
                                    }
                                ],
                                "id": 651,
                                "name": "ParameterList",
                                "src": "3133:9:2"
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
                                                "id": 652,
                                                "name": "ElementaryTypeName",
                                                "src": "3166:4:2"
                                            }
                                        ],
                                        "id": 653,
                                        "name": "VariableDeclaration",
                                        "src": "3166:4:2"
                                    }
                                ],
                                "id": 654,
                                "name": "ParameterList",
                                "src": "3165:6:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 654
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
                                                "id": 655,
                                                "name": "Literal",
                                                "src": "3189:5:2"
                                            }
                                        ],
                                        "id": 656,
                                        "name": "Return",
                                        "src": "3182:12:2"
                                    }
                                ],
                                "id": 657,
                                "name": "Block",
                                "src": "3172:29:2"
                            }
                        ],
                        "id": 658,
                        "name": "FunctionDefinition",
                        "src": "3112:89:2"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "amount_owner",
                            "payable": false,
                            "scope": 836,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_to",
                                            "scope": 729,
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
                                                "src": "3229:7:2"
                                            }
                                        ],
                                        "id": 660,
                                        "name": "VariableDeclaration",
                                        "src": "3229:11:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_amount",
                                            "scope": 729,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 661,
                                                "name": "ElementaryTypeName",
                                                "src": "3242:7:2"
                                            }
                                        ],
                                        "id": 662,
                                        "name": "VariableDeclaration",
                                        "src": "3242:15:2"
                                    }
                                ],
                                "id": 663,
                                "name": "ParameterList",
                                "src": "3228:30:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 729,
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
                                                "id": 664,
                                                "name": "ElementaryTypeName",
                                                "src": "3279:7:2"
                                            }
                                        ],
                                        "id": 665,
                                        "name": "VariableDeclaration",
                                        "src": "3279:7:2"
                                    }
                                ],
                                "id": 666,
                                "name": "ParameterList",
                                "src": "3278:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "assignments": [
                                                668
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "count",
                                                    "scope": 729,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint256",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint256",
                                                            "type": "uint256"
                                                        },
                                                        "id": 667,
                                                        "name": "ElementaryTypeName",
                                                        "src": "3297:7:2"
                                                    }
                                                ],
                                                "id": 668,
                                                "name": "VariableDeclaration",
                                                "src": "3297:13:2"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "length",
                                                    "referencedDeclaration": null,
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "owners",
                                                            "referencedDeclaration": 400,
                                                            "type": "address[] storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "struct GameController.Allowance storage ref"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 413,
                                                                            "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                                            "value": "allowances"
                                                                        },
                                                                        "id": 669,
                                                                        "name": "Identifier",
                                                                        "src": "3313:10:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 660,
                                                                            "type": "address",
                                                                            "value": "_to"
                                                                        },
                                                                        "id": 670,
                                                                        "name": "Identifier",
                                                                        "src": "3324:3:2"
                                                                    }
                                                                ],
                                                                "id": 671,
                                                                "name": "IndexAccess",
                                                                "src": "3313:15:2"
                                                            }
                                                        ],
                                                        "id": 672,
                                                        "name": "MemberAccess",
                                                        "src": "3313:22:2"
                                                    }
                                                ],
                                                "id": 673,
                                                "name": "MemberAccess",
                                                "src": "3313:29:2"
                                            }
                                        ],
                                        "id": 674,
                                        "name": "VariableDeclarationStatement",
                                        "src": "3297:45:2"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "assignments": [
                                                        676
                                                    ]
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "constant": false,
                                                            "name": "i",
                                                            "scope": 729,
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
                                                                "id": 675,
                                                                "name": "ElementaryTypeName",
                                                                "src": "3356:4:2"
                                                            }
                                                        ],
                                                        "id": 676,
                                                        "name": "VariableDeclaration",
                                                        "src": "3356:6:2"
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
                                                        "id": 677,
                                                        "name": "Literal",
                                                        "src": "3365:1:2"
                                                    }
                                                ],
                                                "id": 678,
                                                "name": "VariableDeclarationStatement",
                                                "src": "3356:10:2"
                                            },
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
                                                    "operator": "<",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 676,
                                                            "type": "uint256",
                                                            "value": "i"
                                                        },
                                                        "id": 679,
                                                        "name": "Identifier",
                                                        "src": "3368:1:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 668,
                                                            "type": "uint256",
                                                            "value": "count"
                                                        },
                                                        "id": 680,
                                                        "name": "Identifier",
                                                        "src": "3372:5:2"
                                                    }
                                                ],
                                                "id": 681,
                                                "name": "BinaryOperation",
                                                "src": "3368:9:2"
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
                                                            "operator": "++",
                                                            "prefix": false,
                                                            "type": "uint256"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 676,
                                                                    "type": "uint256",
                                                                    "value": "i"
                                                                },
                                                                "id": 682,
                                                                "name": "Identifier",
                                                                "src": "3379:1:2"
                                                            }
                                                        ],
                                                        "id": 683,
                                                        "name": "UnaryOperation",
                                                        "src": "3379:3:2"
                                                    }
                                                ],
                                                "id": 684,
                                                "name": "ExpressionStatement",
                                                "src": "3379:3:2"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "assignments": [
                                                                686
                                                            ]
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "constant": false,
                                                                    "name": "owner",
                                                                    "scope": 729,
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
                                                                        "id": 685,
                                                                        "name": "ElementaryTypeName",
                                                                        "src": "3398:7:2"
                                                                    }
                                                                ],
                                                                "id": 686,
                                                                "name": "VariableDeclaration",
                                                                "src": "3398:13:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "type": "address"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "member_name": "owners",
                                                                            "referencedDeclaration": 400,
                                                                            "type": "address[] storage ref"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": true,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "type": "struct GameController.Allowance storage ref"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 413,
                                                                                            "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                                                            "value": "allowances"
                                                                                        },
                                                                                        "id": 687,
                                                                                        "name": "Identifier",
                                                                                        "src": "3414:10:2"
                                                                                    },
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 660,
                                                                                            "type": "address",
                                                                                            "value": "_to"
                                                                                        },
                                                                                        "id": 688,
                                                                                        "name": "Identifier",
                                                                                        "src": "3425:3:2"
                                                                                    }
                                                                                ],
                                                                                "id": 689,
                                                                                "name": "IndexAccess",
                                                                                "src": "3414:15:2"
                                                                            }
                                                                        ],
                                                                        "id": 690,
                                                                        "name": "MemberAccess",
                                                                        "src": "3414:22:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 676,
                                                                            "type": "uint256",
                                                                            "value": "i"
                                                                        },
                                                                        "id": 691,
                                                                        "name": "Identifier",
                                                                        "src": "3437:1:2"
                                                                    }
                                                                ],
                                                                "id": 692,
                                                                "name": "IndexAccess",
                                                                "src": "3414:25:2"
                                                            }
                                                        ],
                                                        "id": 693,
                                                        "name": "VariableDeclarationStatement",
                                                        "src": "3398:41:2"
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
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "operator": ">=",
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
                                                                            "type": "uint256",
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
                                                                                    "member_name": "balanceOf",
                                                                                    "referencedDeclaration": 1847,
                                                                                    "type": "function (address) view external returns (uint256)"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 409,
                                                                                            "type": "contract ERC20",
                                                                                            "value": "token"
                                                                                        },
                                                                                        "id": 694,
                                                                                        "name": "Identifier",
                                                                                        "src": "3456:5:2"
                                                                                    }
                                                                                ],
                                                                                "id": 695,
                                                                                "name": "MemberAccess",
                                                                                "src": "3456:15:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 686,
                                                                                    "type": "address",
                                                                                    "value": "owner"
                                                                                },
                                                                                "id": 696,
                                                                                "name": "Identifier",
                                                                                "src": "3472:5:2"
                                                                            }
                                                                        ],
                                                                        "id": 697,
                                                                        "name": "FunctionCall",
                                                                        "src": "3456:22:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 662,
                                                                            "type": "uint256",
                                                                            "value": "_amount"
                                                                        },
                                                                        "id": 698,
                                                                        "name": "Identifier",
                                                                        "src": "3480:7:2"
                                                                    }
                                                                ],
                                                                "id": 699,
                                                                "name": "BinaryOperation",
                                                                "src": "3456:31:2"
                                                            },
                                                            {
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "assignments": [
                                                                                701
                                                                            ]
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "constant": false,
                                                                                    "name": "balance",
                                                                                    "scope": 729,
                                                                                    "stateVariable": false,
                                                                                    "storageLocation": "storage",
                                                                                    "type": "struct GameController.Balance storage pointer",
                                                                                    "value": null,
                                                                                    "visibility": "internal"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "contractScope": null,
                                                                                            "name": "Balance",
                                                                                            "referencedDeclaration": 397,
                                                                                            "type": "struct GameController.Balance storage pointer"
                                                                                        },
                                                                                        "id": 700,
                                                                                        "name": "UserDefinedTypeName",
                                                                                        "src": "3506:7:2"
                                                                                    }
                                                                                ],
                                                                                "id": 701,
                                                                                "name": "VariableDeclaration",
                                                                                "src": "3506:23:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": true,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "type": "struct GameController.Balance storage ref"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "member_name": "balances",
                                                                                            "referencedDeclaration": 404,
                                                                                            "type": "mapping(address => struct GameController.Balance storage ref)"
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "isConstant": false,
                                                                                                    "isLValue": true,
                                                                                                    "isPure": false,
                                                                                                    "lValueRequested": false,
                                                                                                    "type": "struct GameController.Allowance storage ref"
                                                                                                },
                                                                                                "children": [
                                                                                                    {
                                                                                                        "attributes": {
                                                                                                            "argumentTypes": null,
                                                                                                            "overloadedDeclarations": [
                                                                                                                null
                                                                                                            ],
                                                                                                            "referencedDeclaration": 413,
                                                                                                            "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                                                                            "value": "allowances"
                                                                                                        },
                                                                                                        "id": 702,
                                                                                                        "name": "Identifier",
                                                                                                        "src": "3532:10:2"
                                                                                                    },
                                                                                                    {
                                                                                                        "attributes": {
                                                                                                            "argumentTypes": null,
                                                                                                            "overloadedDeclarations": [
                                                                                                                null
                                                                                                            ],
                                                                                                            "referencedDeclaration": 660,
                                                                                                            "type": "address",
                                                                                                            "value": "_to"
                                                                                                        },
                                                                                                        "id": 703,
                                                                                                        "name": "Identifier",
                                                                                                        "src": "3543:3:2"
                                                                                                    }
                                                                                                ],
                                                                                                "id": 704,
                                                                                                "name": "IndexAccess",
                                                                                                "src": "3532:15:2"
                                                                                            }
                                                                                        ],
                                                                                        "id": 705,
                                                                                        "name": "MemberAccess",
                                                                                        "src": "3532:24:2"
                                                                                    },
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 686,
                                                                                            "type": "address",
                                                                                            "value": "owner"
                                                                                        },
                                                                                        "id": 706,
                                                                                        "name": "Identifier",
                                                                                        "src": "3557:5:2"
                                                                                    }
                                                                                ],
                                                                                "id": 707,
                                                                                "name": "IndexAccess",
                                                                                "src": "3532:31:2"
                                                                            }
                                                                        ],
                                                                        "id": 708,
                                                                        "name": "VariableDeclarationStatement",
                                                                        "src": "3506:57:2"
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
                                                                                        "typeIdentifier": "t_uint256",
                                                                                        "typeString": "uint256"
                                                                                    },
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "operator": ">=",
                                                                                    "type": "bool"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "member_name": "approved_amount",
                                                                                            "referencedDeclaration": 394,
                                                                                            "type": "uint256"
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 701,
                                                                                                    "type": "struct GameController.Balance storage pointer",
                                                                                                    "value": "balance"
                                                                                                },
                                                                                                "id": 709,
                                                                                                "name": "Identifier",
                                                                                                "src": "3584:7:2"
                                                                                            }
                                                                                        ],
                                                                                        "id": 710,
                                                                                        "name": "MemberAccess",
                                                                                        "src": "3584:23:2"
                                                                                    },
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
                                                                                            "operator": "+",
                                                                                            "type": "uint256"
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 662,
                                                                                                    "type": "uint256",
                                                                                                    "value": "_amount"
                                                                                                },
                                                                                                "id": 711,
                                                                                                "name": "Identifier",
                                                                                                "src": "3611:7:2"
                                                                                            },
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "isConstant": false,
                                                                                                    "isLValue": true,
                                                                                                    "isPure": false,
                                                                                                    "lValueRequested": false,
                                                                                                    "member_name": "reserved_amount",
                                                                                                    "referencedDeclaration": 396,
                                                                                                    "type": "uint256"
                                                                                                },
                                                                                                "children": [
                                                                                                    {
                                                                                                        "attributes": {
                                                                                                            "argumentTypes": null,
                                                                                                            "overloadedDeclarations": [
                                                                                                                null
                                                                                                            ],
                                                                                                            "referencedDeclaration": 701,
                                                                                                            "type": "struct GameController.Balance storage pointer",
                                                                                                            "value": "balance"
                                                                                                        },
                                                                                                        "id": 712,
                                                                                                        "name": "Identifier",
                                                                                                        "src": "3621:7:2"
                                                                                                    }
                                                                                                ],
                                                                                                "id": 713,
                                                                                                "name": "MemberAccess",
                                                                                                "src": "3621:23:2"
                                                                                            }
                                                                                        ],
                                                                                        "id": 714,
                                                                                        "name": "BinaryOperation",
                                                                                        "src": "3611:33:2"
                                                                                    }
                                                                                ],
                                                                                "id": 715,
                                                                                "name": "BinaryOperation",
                                                                                "src": "3584:60:2"
                                                                            },
                                                                            {
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "functionReturnParameters": 666
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 686,
                                                                                                    "type": "address",
                                                                                                    "value": "owner"
                                                                                                },
                                                                                                "id": 716,
                                                                                                "name": "Identifier",
                                                                                                "src": "3674:5:2"
                                                                                            }
                                                                                        ],
                                                                                        "id": 717,
                                                                                        "name": "Return",
                                                                                        "src": "3667:12:2"
                                                                                    }
                                                                                ],
                                                                                "id": 718,
                                                                                "name": "Block",
                                                                                "src": "3645:53:2"
                                                                            }
                                                                        ],
                                                                        "id": 719,
                                                                        "name": "IfStatement",
                                                                        "src": "3581:117:2"
                                                                    }
                                                                ],
                                                                "id": 720,
                                                                "name": "Block",
                                                                "src": "3488:224:2"
                                                            }
                                                        ],
                                                        "id": 721,
                                                        "name": "IfStatement",
                                                        "src": "3453:259:2"
                                                    }
                                                ],
                                                "id": 722,
                                                "name": "Block",
                                                "src": "3384:338:2"
                                            }
                                        ],
                                        "id": 723,
                                        "name": "ForStatement",
                                        "src": "3352:370:2"
                                    },
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 666
                                        },
                                        "children": [
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
                                                        "id": 724,
                                                        "name": "ElementaryTypeNameExpression",
                                                        "src": "3738:7:2"
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
                                                        "id": 725,
                                                        "name": "Literal",
                                                        "src": "3746:1:2"
                                                    }
                                                ],
                                                "id": 726,
                                                "name": "FunctionCall",
                                                "src": "3738:10:2"
                                            }
                                        ],
                                        "id": 727,
                                        "name": "Return",
                                        "src": "3731:17:2"
                                    }
                                ],
                                "id": 728,
                                "name": "Block",
                                "src": "3287:468:2"
                            }
                        ],
                        "id": 729,
                        "name": "FunctionDefinition",
                        "src": "3207:548:2"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "approved_amount",
                            "payable": false,
                            "scope": 836,
                            "stateMutability": "view",
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
                                            "scope": 747,
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
                                                "id": 730,
                                                "name": "ElementaryTypeName",
                                                "src": "3786:7:2"
                                            }
                                        ],
                                        "id": 731,
                                        "name": "VariableDeclaration",
                                        "src": "3786:14:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_game",
                                            "scope": 747,
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
                                                "id": 732,
                                                "name": "ElementaryTypeName",
                                                "src": "3802:7:2"
                                            }
                                        ],
                                        "id": 733,
                                        "name": "VariableDeclaration",
                                        "src": "3802:13:2"
                                    }
                                ],
                                "id": 734,
                                "name": "ParameterList",
                                "src": "3785:31:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 747,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 735,
                                                "name": "ElementaryTypeName",
                                                "src": "3837:7:2"
                                            }
                                        ],
                                        "id": 736,
                                        "name": "VariableDeclaration",
                                        "src": "3837:7:2"
                                    }
                                ],
                                "id": 737,
                                "name": "ParameterList",
                                "src": "3836:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 737
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "approved_amount",
                                                    "referencedDeclaration": 394,
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct GameController.Balance storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "balances",
                                                                    "referencedDeclaration": 404,
                                                                    "type": "mapping(address => struct GameController.Balance storage ref)"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "type": "struct GameController.Allowance storage ref"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 413,
                                                                                    "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                                                    "value": "allowances"
                                                                                },
                                                                                "id": 738,
                                                                                "name": "Identifier",
                                                                                "src": "3862:10:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 733,
                                                                                    "type": "address",
                                                                                    "value": "_game"
                                                                                },
                                                                                "id": 739,
                                                                                "name": "Identifier",
                                                                                "src": "3873:5:2"
                                                                            }
                                                                        ],
                                                                        "id": 740,
                                                                        "name": "IndexAccess",
                                                                        "src": "3862:17:2"
                                                                    }
                                                                ],
                                                                "id": 741,
                                                                "name": "MemberAccess",
                                                                "src": "3862:26:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 731,
                                                                    "type": "address",
                                                                    "value": "_owner"
                                                                },
                                                                "id": 742,
                                                                "name": "Identifier",
                                                                "src": "3889:6:2"
                                                            }
                                                        ],
                                                        "id": 743,
                                                        "name": "IndexAccess",
                                                        "src": "3862:34:2"
                                                    }
                                                ],
                                                "id": 744,
                                                "name": "MemberAccess",
                                                "src": "3862:50:2"
                                            }
                                        ],
                                        "id": 745,
                                        "name": "Return",
                                        "src": "3855:57:2"
                                    }
                                ],
                                "id": 746,
                                "name": "Block",
                                "src": "3845:74:2"
                            }
                        ],
                        "id": 747,
                        "name": "FunctionDefinition",
                        "src": "3761:158:2"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "reserved_amount",
                            "payable": false,
                            "scope": 836,
                            "stateMutability": "view",
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
                                            "scope": 765,
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
                                                "id": 748,
                                                "name": "ElementaryTypeName",
                                                "src": "3950:7:2"
                                            }
                                        ],
                                        "id": 749,
                                        "name": "VariableDeclaration",
                                        "src": "3950:14:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_game",
                                            "scope": 765,
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
                                                "id": 750,
                                                "name": "ElementaryTypeName",
                                                "src": "3966:7:2"
                                            }
                                        ],
                                        "id": 751,
                                        "name": "VariableDeclaration",
                                        "src": "3966:13:2"
                                    }
                                ],
                                "id": 752,
                                "name": "ParameterList",
                                "src": "3949:31:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 765,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 753,
                                                "name": "ElementaryTypeName",
                                                "src": "4001:7:2"
                                            }
                                        ],
                                        "id": 754,
                                        "name": "VariableDeclaration",
                                        "src": "4001:7:2"
                                    }
                                ],
                                "id": 755,
                                "name": "ParameterList",
                                "src": "4000:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 755
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "reserved_amount",
                                                    "referencedDeclaration": 396,
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct GameController.Balance storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "balances",
                                                                    "referencedDeclaration": 404,
                                                                    "type": "mapping(address => struct GameController.Balance storage ref)"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "type": "struct GameController.Allowance storage ref"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 413,
                                                                                    "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                                                    "value": "allowances"
                                                                                },
                                                                                "id": 756,
                                                                                "name": "Identifier",
                                                                                "src": "4026:10:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 751,
                                                                                    "type": "address",
                                                                                    "value": "_game"
                                                                                },
                                                                                "id": 757,
                                                                                "name": "Identifier",
                                                                                "src": "4037:5:2"
                                                                            }
                                                                        ],
                                                                        "id": 758,
                                                                        "name": "IndexAccess",
                                                                        "src": "4026:17:2"
                                                                    }
                                                                ],
                                                                "id": 759,
                                                                "name": "MemberAccess",
                                                                "src": "4026:26:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 749,
                                                                    "type": "address",
                                                                    "value": "_owner"
                                                                },
                                                                "id": 760,
                                                                "name": "Identifier",
                                                                "src": "4053:6:2"
                                                            }
                                                        ],
                                                        "id": 761,
                                                        "name": "IndexAccess",
                                                        "src": "4026:34:2"
                                                    }
                                                ],
                                                "id": 762,
                                                "name": "MemberAccess",
                                                "src": "4026:50:2"
                                            }
                                        ],
                                        "id": 763,
                                        "name": "Return",
                                        "src": "4019:57:2"
                                    }
                                ],
                                "id": 764,
                                "name": "Block",
                                "src": "4009:74:2"
                            }
                        ],
                        "id": 765,
                        "name": "FunctionDefinition",
                        "src": "3925:158:2"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "owner_index",
                            "payable": false,
                            "scope": 836,
                            "stateMutability": "view",
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
                                            "scope": 783,
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
                                                "id": 766,
                                                "name": "ElementaryTypeName",
                                                "src": "4110:7:2"
                                            }
                                        ],
                                        "id": 767,
                                        "name": "VariableDeclaration",
                                        "src": "4110:14:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_game",
                                            "scope": 783,
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
                                                "id": 768,
                                                "name": "ElementaryTypeName",
                                                "src": "4126:7:2"
                                            }
                                        ],
                                        "id": 769,
                                        "name": "VariableDeclaration",
                                        "src": "4126:13:2"
                                    }
                                ],
                                "id": 770,
                                "name": "ParameterList",
                                "src": "4109:31:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 783,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 771,
                                                "name": "ElementaryTypeName",
                                                "src": "4161:7:2"
                                            }
                                        ],
                                        "id": 772,
                                        "name": "VariableDeclaration",
                                        "src": "4161:7:2"
                                    }
                                ],
                                "id": 773,
                                "name": "ParameterList",
                                "src": "4160:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 773
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "key_index",
                                                    "referencedDeclaration": 392,
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct GameController.Balance storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "balances",
                                                                    "referencedDeclaration": 404,
                                                                    "type": "mapping(address => struct GameController.Balance storage ref)"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "type": "struct GameController.Allowance storage ref"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 413,
                                                                                    "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                                                    "value": "allowances"
                                                                                },
                                                                                "id": 774,
                                                                                "name": "Identifier",
                                                                                "src": "4186:10:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 769,
                                                                                    "type": "address",
                                                                                    "value": "_game"
                                                                                },
                                                                                "id": 775,
                                                                                "name": "Identifier",
                                                                                "src": "4197:5:2"
                                                                            }
                                                                        ],
                                                                        "id": 776,
                                                                        "name": "IndexAccess",
                                                                        "src": "4186:17:2"
                                                                    }
                                                                ],
                                                                "id": 777,
                                                                "name": "MemberAccess",
                                                                "src": "4186:26:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 767,
                                                                    "type": "address",
                                                                    "value": "_owner"
                                                                },
                                                                "id": 778,
                                                                "name": "Identifier",
                                                                "src": "4213:6:2"
                                                            }
                                                        ],
                                                        "id": 779,
                                                        "name": "IndexAccess",
                                                        "src": "4186:34:2"
                                                    }
                                                ],
                                                "id": 780,
                                                "name": "MemberAccess",
                                                "src": "4186:44:2"
                                            }
                                        ],
                                        "id": 781,
                                        "name": "Return",
                                        "src": "4179:51:2"
                                    }
                                ],
                                "id": 782,
                                "name": "Block",
                                "src": "4169:68:2"
                            }
                        ],
                        "id": 783,
                        "name": "FunctionDefinition",
                        "src": "4089:148:2"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "available_amount",
                            "payable": false,
                            "scope": 836,
                            "stateMutability": "view",
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
                                            "scope": 821,
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
                                                "id": 784,
                                                "name": "ElementaryTypeName",
                                                "src": "4269:7:2"
                                            }
                                        ],
                                        "id": 785,
                                        "name": "VariableDeclaration",
                                        "src": "4269:14:2"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_game",
                                            "scope": 821,
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
                                                "id": 786,
                                                "name": "ElementaryTypeName",
                                                "src": "4285:7:2"
                                            }
                                        ],
                                        "id": 787,
                                        "name": "VariableDeclaration",
                                        "src": "4285:13:2"
                                    }
                                ],
                                "id": 788,
                                "name": "ParameterList",
                                "src": "4268:31:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 821,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 789,
                                                "name": "ElementaryTypeName",
                                                "src": "4320:7:2"
                                            }
                                        ],
                                        "id": 790,
                                        "name": "VariableDeclaration",
                                        "src": "4320:7:2"
                                    }
                                ],
                                "id": 791,
                                "name": "ParameterList",
                                "src": "4319:9:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "assignments": [
                                                793
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "amt",
                                                    "scope": 821,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint256",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint256",
                                                            "type": "uint256"
                                                        },
                                                        "id": 792,
                                                        "name": "ElementaryTypeName",
                                                        "src": "4338:7:2"
                                                    }
                                                ],
                                                "id": 793,
                                                "name": "VariableDeclaration",
                                                "src": "4338:11:2"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "approved_amount",
                                                    "referencedDeclaration": 394,
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct GameController.Balance storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "member_name": "balances",
                                                                    "referencedDeclaration": 404,
                                                                    "type": "mapping(address => struct GameController.Balance storage ref)"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "type": "struct GameController.Allowance storage ref"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 413,
                                                                                    "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                                                    "value": "allowances"
                                                                                },
                                                                                "id": 794,
                                                                                "name": "Identifier",
                                                                                "src": "4352:10:2"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 787,
                                                                                    "type": "address",
                                                                                    "value": "_game"
                                                                                },
                                                                                "id": 795,
                                                                                "name": "Identifier",
                                                                                "src": "4363:5:2"
                                                                            }
                                                                        ],
                                                                        "id": 796,
                                                                        "name": "IndexAccess",
                                                                        "src": "4352:17:2"
                                                                    }
                                                                ],
                                                                "id": 797,
                                                                "name": "MemberAccess",
                                                                "src": "4352:26:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 785,
                                                                    "type": "address",
                                                                    "value": "_owner"
                                                                },
                                                                "id": 798,
                                                                "name": "Identifier",
                                                                "src": "4379:6:2"
                                                            }
                                                        ],
                                                        "id": 799,
                                                        "name": "IndexAccess",
                                                        "src": "4352:34:2"
                                                    }
                                                ],
                                                "id": 800,
                                                "name": "MemberAccess",
                                                "src": "4352:50:2"
                                            }
                                        ],
                                        "id": 801,
                                        "name": "VariableDeclarationStatement",
                                        "src": "4338:64:2"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                803
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "bal",
                                                    "scope": 821,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint256",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint256",
                                                            "type": "uint256"
                                                        },
                                                        "id": 802,
                                                        "name": "ElementaryTypeName",
                                                        "src": "4412:7:2"
                                                    }
                                                ],
                                                "id": 803,
                                                "name": "VariableDeclaration",
                                                "src": "4412:11:2"
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
                                                    "type": "uint256",
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
                                                            "member_name": "balanceOf",
                                                            "referencedDeclaration": 1847,
                                                            "type": "function (address) view external returns (uint256)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 409,
                                                                    "type": "contract ERC20",
                                                                    "value": "token"
                                                                },
                                                                "id": 804,
                                                                "name": "Identifier",
                                                                "src": "4426:5:2"
                                                            }
                                                        ],
                                                        "id": 805,
                                                        "name": "MemberAccess",
                                                        "src": "4426:15:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 785,
                                                            "type": "address",
                                                            "value": "_owner"
                                                        },
                                                        "id": 806,
                                                        "name": "Identifier",
                                                        "src": "4442:6:2"
                                                    }
                                                ],
                                                "id": 807,
                                                "name": "FunctionCall",
                                                "src": "4426:23:2"
                                            }
                                        ],
                                        "id": 808,
                                        "name": "VariableDeclarationStatement",
                                        "src": "4412:37:2"
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
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "<",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 803,
                                                            "type": "uint256",
                                                            "value": "bal"
                                                        },
                                                        "id": 809,
                                                        "name": "Identifier",
                                                        "src": "4463:3:2"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 793,
                                                            "type": "uint256",
                                                            "value": "amt"
                                                        },
                                                        "id": 810,
                                                        "name": "Identifier",
                                                        "src": "4469:3:2"
                                                    }
                                                ],
                                                "id": 811,
                                                "name": "BinaryOperation",
                                                "src": "4463:9:2"
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
                                                                    "type": "uint256"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 793,
                                                                            "type": "uint256",
                                                                            "value": "amt"
                                                                        },
                                                                        "id": 812,
                                                                        "name": "Identifier",
                                                                        "src": "4487:3:2"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 803,
                                                                            "type": "uint256",
                                                                            "value": "bal"
                                                                        },
                                                                        "id": 813,
                                                                        "name": "Identifier",
                                                                        "src": "4493:3:2"
                                                                    }
                                                                ],
                                                                "id": 814,
                                                                "name": "Assignment",
                                                                "src": "4487:9:2"
                                                            }
                                                        ],
                                                        "id": 815,
                                                        "name": "ExpressionStatement",
                                                        "src": "4487:9:2"
                                                    }
                                                ],
                                                "id": 816,
                                                "name": "Block",
                                                "src": "4473:34:2"
                                            }
                                        ],
                                        "id": 817,
                                        "name": "IfStatement",
                                        "src": "4459:48:2"
                                    },
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 791
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "overloadedDeclarations": [
                                                        null
                                                    ],
                                                    "referencedDeclaration": 793,
                                                    "type": "uint256",
                                                    "value": "amt"
                                                },
                                                "id": 818,
                                                "name": "Identifier",
                                                "src": "4523:3:2"
                                            }
                                        ],
                                        "id": 819,
                                        "name": "Return",
                                        "src": "4516:10:2"
                                    }
                                ],
                                "id": 820,
                                "name": "Block",
                                "src": "4328:205:2"
                            }
                        ],
                        "id": 821,
                        "name": "FunctionDefinition",
                        "src": "4243:290:2"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "owners",
                            "payable": false,
                            "scope": 836,
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_game",
                                            "scope": 835,
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
                                                "id": 822,
                                                "name": "ElementaryTypeName",
                                                "src": "4555:7:2"
                                            }
                                        ],
                                        "id": 823,
                                        "name": "VariableDeclaration",
                                        "src": "4555:13:2"
                                    }
                                ],
                                "id": 824,
                                "name": "ParameterList",
                                "src": "4554:15:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "",
                                            "scope": 835,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address[] memory",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "length": null,
                                                    "type": "address[] storage pointer"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "address",
                                                            "type": "address"
                                                        },
                                                        "id": 825,
                                                        "name": "ElementaryTypeName",
                                                        "src": "4590:7:2"
                                                    }
                                                ],
                                                "id": 826,
                                                "name": "ArrayTypeName",
                                                "src": "4590:9:2"
                                            }
                                        ],
                                        "id": 827,
                                        "name": "VariableDeclaration",
                                        "src": "4590:9:2"
                                    }
                                ],
                                "id": 828,
                                "name": "ParameterList",
                                "src": "4589:11:2"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 828
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "member_name": "owners",
                                                    "referencedDeclaration": 400,
                                                    "type": "address[] storage ref"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "type": "struct GameController.Allowance storage ref"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 413,
                                                                    "type": "mapping(address => struct GameController.Allowance storage ref)",
                                                                    "value": "allowances"
                                                                },
                                                                "id": 829,
                                                                "name": "Identifier",
                                                                "src": "4617:10:2"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 823,
                                                                    "type": "address",
                                                                    "value": "_game"
                                                                },
                                                                "id": 830,
                                                                "name": "Identifier",
                                                                "src": "4628:5:2"
                                                            }
                                                        ],
                                                        "id": 831,
                                                        "name": "IndexAccess",
                                                        "src": "4617:17:2"
                                                    }
                                                ],
                                                "id": 832,
                                                "name": "MemberAccess",
                                                "src": "4617:24:2"
                                            }
                                        ],
                                        "id": 833,
                                        "name": "Return",
                                        "src": "4610:31:2"
                                    }
                                ],
                                "id": 834,
                                "name": "Block",
                                "src": "4600:48:2"
                            }
                        ],
                        "id": 835,
                        "name": "FunctionDefinition",
                        "src": "4539:109:2"
                    }
                ],
                "id": 836,
                "name": "ContractDefinition",
                "src": "958:3692:2"
            }
        ],
        "id": 837,
        "name": "SourceUnit",
        "src": "0:4650:2"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "1.0.1",
    "updatedAt": "2018-01-07T10:14:16.897Z"
};