# IZX Smart Contracts

The project contains:

1) IZX Crowdsale and Token Smart Contracts
2) IZX Smart Contracts for Games
3) Supporting scripts

## IZX Crowdsale and Token Smart Contracts

### IZXToken Smart Contract
 
Sources are located in [IZXToken.sol](contracts/token/IZXToken.sol).

### TokenSale Smart Contract
 
Sources are located in [TokenSaleAfterSplit.sol](contracts/crowdsale/TokenSaleAfterSplit.sol).

## IZX Smart Contracts for Games

### Campaign Smart Contract
 
Sources are located in [Campaign.sol](contracts/game/Campaign.sol).

### Auction Smart Contract
 
Sources are located in [Auction.sol](contracts/game/Auction.sol).


### TokenDriver smart contract

Sources are located in [TokenDriver.sol](contracts/drive/TokenDriver.sol).

### DriveToken smart contract

Sources are located in [DriveToken.sol](contracts/drive/DriveToken.sol).


## Deployed Addresses

### Foundation Blockchain Network

* IZX Token: [0x2ad180cbaffbc97237f572148fc1b283b68d8861](https://etherscan.io/token/0x2ad180cbaffbc97237f572148fc1b283b68d8861)

### Ropsten Blockchain Network

* IZX Token: [0xe3cbcb526d8bb2fd709ac2d56878a52840ae7056](https://ropsten.etherscan.io/token/0xe3cbcb526d8bb2fd709ac2d56878a52840ae7056)
* TokenDriver: [0xf74138625c846d913c6673f8283db4c6a7825538](https://ropsten.etherscan.io/address/0xf74138625c846d913c6673f8283db4c6a7825538)

Example token and contracts:

* DRIVE Token: 
* Auction for DRIVE Token: [0x686d003bb33726bfb0f810a144f5dc9f7f132716](https://ropsten.etherscan.io/address/0x686d003bb33726bfb0f810a144f5dc9f7f132716)        
* Campaign for DRIVE Token: [0xf860ec4072c079c59b21d625f5f76319bf896b96](https://ropsten.etherscan.io/address/0xf860ec4072c079c59b21d625f5f76319bf896b96)          
        

## Installation

```
npm install -g ethereumjs-testrpc
npm install -g truffle
npm install -g web3-provider-engine
npm install -g ethereumjs-wallet
```

## Running tests

Tests can be run using Test RPC. Run it with command

```
testrpc -m "warrior minimum breeze raven garden express solar flavor obvious twenty alpha actress"
```

Alternatively you can use [Ganache](https://github.com/trufflesuite/ganache-cli):

```
npm install -g ganache-cli
ganache-cli
```

After server started, you can compile, run migrations and tests


```
$ truffle test
Using network 'development'.



  Contract: IZXToken
    ✓ should have 18 digits
    ✓ should have 1 supply
    ✓ should have IZX symbol (49ms)

  Contract: Wallet
    ✓ should have 5 owners
    ✓ should require 3 owners

  Contract: TokenSale
    ✓ should have set exchange rate
    ✓ should have set wallet
    ✓ should have set token
    ✓ should set controller for token
    ✓ should transfer tokens by ETH transfer (614ms)
    ✓ should change ETH rate (709ms)
    ✓ should distribute tokens (204ms)
    ✓ should disable transfer tokens (127ms)
    ✓ should enable transfer tokens (138ms)
    ✓ should change controller
    ✓ should protect to change controller (86ms)
    ✓ should protect distribute tokens (62ms)

  Contract: TokenDriver
    ✓ should use IZX token, sold to users (233ms)
    ✓ should control IZX token (46ms)
    ✓ should allow transfer tokens from owner to owner (94ms)
    ✓ should allow approve tokens from owner to owner (187ms)
    ✓ should not allow transfer tokens to contract
    ✓ should not allow approve tokens to contract (38ms)
    ✓ should allow create auction and allow/transfer tokens (154ms)
    ✓ should allow create campaign and allow/transfer tokens (149ms)

  Contract: Campaign
    ✓ should use IZX token, owned by users (635ms)
    ✓ should use ERC721 DRIVE token, owned by users (91ms)
    ✓ should be created by token driver (95ms)
    ✓ should use IZX & DRIVE tokens (65ms)
    ✓ should calculate payouts (79ms)
    ✓ should accept approval from advertiser (50ms)
    ✓ should convert player (360ms)
    ✓ should be reclaimed by player (304ms)
    ✓ should be reclaimed after expiration (7372ms)

  Contract: Auction
    ✓ should use IZX token, owned by users (559ms)
    ✓ should use ERC721 DRIVE token, owned by users (85ms)
    ✓ should be created by token driver (89ms)
    ✓ should use IZX & DRIVE tokens
    ✓ should have host_share
    ✓ should sell ERC721 for sale price (695ms)
    ✓ should allow to withdraw ERC721 after finish (6437ms)


  41 passing (21s)


```

## Executing deployment scripts

Crowdsale contract deployment and management scripts are located in script directory.
They are called as node scripts:
```
npm install
node script/deploy_tokensale
```

Every script contains variable, defining the environment to run: 
```
const environment = 'ropsten'; // ropsten/foundation, change to foundation to deploy to real
```

Configuration in script/config.js contains all properties for selected environment.

On script run, it asks for credentials, and asks to enter word 'Yes!' before actual execution. After successfull run, it logs the hash of transaction,
that should be looked up in ethereum explorer.

### Production ( Ethereum Foundation network) deployment scripts


**node script/deploy_tokensale** - deploys the crowdsale contract with the specified token and 
  vault in the configuration

**node script/deploy_tokensale_split** - deploys the crowdsale contract with the specified token ( after split on 1/100th ) and 
  vault in the configuration

  
**node script/change_controller** - changes the controller for the token. If token alredy has a crowdsale defined as a 
  controller, it uses the method in crowdsale contract. Otherwise, it calls the token method directly

**node script/set_rate** - modifies the exhange rate USD/ETH for crowdsale contract. First it reads the old value and queries for
  the current rate from etherscan.io

**node script/distribute_tokens** - transfers tokens to the owners in the list

**node script/send_eth** - sends ether to an address

**node script/execute_multisig** - initiate transaction in multisig wallet

**node script/confirm_multisig** - confirm transaction in multisig wallet using hash

  
### Test ( Ethereum Ropsten Test Network) deployment scripts

**node script/deploy_izx_token** - deploys IZX token

**node script/generate_tokens** - generate tokens and assign to token creator

**node script/deploy_drive_token** - deploys DRIVE ERC721 token

**node script/deploy_token_driver** - deploys IZX Token driver

**node script/change_controller** - changes the controller for the token. If token alredy has a crowdsale defined as a 
  controller, it uses the method in crowdsale contract. Otherwise, it calls the token method directly

**node script/create_auction** - create auction for ERC721 token

**node script/create_campaign** - create campaign for ERC721 token

## Note on truffle console usage

Use the callback to get deployed instance of contract, as:
```
truffle console --network development
truffle(development)> IZXToken.deployed().then(function(instance){ izx=instance})
truffle(development)> izx.name()
```

When using direct address it is not needed:
```
truffle console --network production
truffle(production)> IZXToken.at('0x2ad180cbaffbc97237f572148fc1b283b68d8861').name()
```

## Validating contract sources

[solidity_flattener](https://github.com/BlockCatIO/solidity-flattener) generates full sources.
Note, that the unsupported parameter --allow-paths required, Before it is integrated into release of solidity_flattener,
use the installation from branch:
```
pip3 install git+https://github.com/dostu/solidity-flattener.git
```

Then execute:

```
solidity_flattener --allow-paths "$(pwd)/contracts" --output build/src/IZXToken_flat.sol contracts/token/IZXToken.sol
solidity_flattener --allow-paths "$(pwd)/contracts" --output build/src/TokenSaleAfterSplit_flat.sol contracts/crowdsale/TokenSaleAfterSplit.sol

solidity_flattener --solc-paths="zeppelin-solidity/=$(pwd)/node_modules/zeppelin-solidity/" --allow-paths "$(pwd)/contracts" --output build/src/DriveToken_flat.sol contracts/drive/DriveToken.sol
solidity_flattener --solc-paths="zeppelin-solidity/=$(pwd)/node_modules/zeppelin-solidity/" --allow-paths "$(pwd)/contracts" --output build/src/TokenDriver_flat.sol contracts/drive/TokenDriver.sol
solidity_flattener --solc-paths="zeppelin-solidity/=$(pwd)/node_modules/zeppelin-solidity/" --allow-paths "$(pwd)/contracts" --output build/src/Auction_flat.sol contracts/drive/Auction.sol
solidity_flattener --solc-paths="zeppelin-solidity/=$(pwd)/node_modules/zeppelin-solidity/" --allow-paths "$(pwd)/contracts" --output build/src/Campaign_flat.sol contracts/drive/Campaign.sol


```