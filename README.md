# IZX Smart Contracts

The project contains:

1) IZX Crowdsale and Token Smart Contracts
2) IZX Smart Contracts for Games
3) Supporting scripts

Current status as of 03/2018 is that the crowdsale smart contracts are successfully deployed and used in Ethereum 
foundation network for IZX tokens initial crowdsale. 

Smart contract for games integration is in test stage, deployed in Ropsten test Ethereum network, 
and will be deployed in main network after the ICO completion. They are developed from ideas,
described in [IZX White Paper](https://github.com/izetex/documents/raw/master/IZX_WHITEPAPER_EN.pdf).
There are differences from the original protocol description, described below and in the contract documentation.

All contracts are properly documented, and main information for their usage can be found in the
source code documentation.

## IZX Crowdsale and Token Smart Contracts


### IZXToken Smart Contract

IZX token is standard ERC-20 token with 18 decimals. 

It has an extension as [ControlledToken](contracts/token/ControlledToken.sol), which is used 
to control transfers, approvals, payments on token and token distribution **during the initial token distribution**.
When ICO finishes, the controller will be replaced with TokenDriver, and form that point
only smart contract will control the token.
 
Sources are located in [IZXToken.sol](contracts/token/IZXToken.sol).

### TokenSale Smart Contract
 
TokenSale is implemented as [TokenController](contracts/token/TokenController.sol). 
It allows token sale to accept payments, distribute tokens. The owner ( creator ) of the contract
has additional rights to do token distribution and change the controller. 
 
Sources are located in [TokenSaleAfterSplit.sol](contracts/crowdsale/TokenSaleAfterSplit.sol).

## IZX Smart Contracts for Games

**IZX token** is the cryptocurrency for **games, game players and advertisers**. IZX builds the
closed ecosystem with a single currency for promoting advertiser products and servicers for 
players of online and mobile games. 

**Advertisers** use IZX for targeting and acquiring new customers from online and 
mobile games. 

**Game players** are gaining IZX in exchange for game artifacts and when
participating in advertiser's campaigns.

**Games** are getting IZX as a commission ( called "host percentage" in  the smart contracts) for involving
players to participate in auctions and campaigns based on IZX token.

This forms the closed IZX eco-system, with the demand coming from advertisers, and supply from
initial token holders, and eventually games and game players.

IZX smart contracts are forming the pure **decentralized organisation (DAO)**, with no central control
or ability any other person or organisation to change the rules or influence the execution of it in any way.
 
Smart contracts are developed from ideas,
described in [IZX White Paper](https://github.com/izetex/documents/raw/master/IZX_WHITEPAPER_EN.pdf). 
In a large extent they are implementing the protocol from the white paper. However, there are differences
from the original protocol specification:

  1) there is **no exchange ETH to IZX** inside IZX smart contracts. This idea, originally described in IZX White paper,
  was later considered as the violation of the ecosystem principle. In ecosystem 
  IZX is the only cryptocurrency involved in the operational cycle. We consider, that IZX token
  holders will benefit from the fact, that IZX is strictly **required** to run advertising campaigns.
  Advertiser can purchase IZX on crypto exchanges ( for BTC, ETH or any other crypto) or get them in any other way to run advertising campaign.
  2) as consequence, the scenario of IZX payment system is no more applicable in common way. Instead, we
  introduce the ability to exchange game artifacts for IZX using **auction  principles** described below in
  the Auction smart contract.
  3) **ERC-721 token** is used as an interface to any game, participating in IZX ecosystem. IZX smart 
  contracts require, that the game must use ERC-721 compliant token as the game artifact, or it needs to 
  integrate it. Example of token, which IZX will use in own geo-AR game on iOS/Android is [DriveToken.sol](contracts/drive/DriveToken.sol).
  This change is caused by the following feature of ERC-721 tokens:
     * they are becoming more and more **popular in crypto games**. CryptoKitties and similar games popularity
     grown significantly since the IZX was first introduced.
     * it is a natural representation on **game artifact**, as they are **identifiable**. So they can
     represent any tangible or virtual asset, having specific value and characteristics. It means they can be applicable
     in much wider variety of games, comparing to ERC-20, that only can be used as a form of currency.
     * they allow to **target** a specific artifact, audience or a person in game. As tokens are identifiable,
     they can be targeted with a precision of one. It plays vital role for campaigns, running by advertisers
     on IZX platform.
     * they are **missing the measurable value**, and this is exactly what IZX adds to ERC-721. For advertisers,
     the value of token is equal to the cost of acquiring the client, and they form the market of game artifacts based on
     this measurement. For players, the value is formed by their own idea of the value of "artifact in game".
     These two measurements of the same value - from advertisers and game players perspective - form a market
     for IZX token, and making the demand and supply balance.
  4) the **auction** scenario is implemented using [Auction](contracts/game/Auction.sol) smart contract.
  5) **token holders** is no more a "role" in smart contract scenarios. In the proposed ecosystem, all parties are token holders,
  and they are playing different roles. When IZX tokens will be traded on open crypto exchanges, token holders
  will benefit from selling them to other parties ( e.g. advertisers ).
    
The bottom line of all changes that we introduced is the wish to make IZX token more valuable and easy to understand and use
for gamers, advertisers and game developers, and be in the latest trends of game development in crypto world.


### Campaign Smart Contract

Campaign is the contract between the host ( who can be the game developer), game player and an advertiser.
When creating a new campaign, the host defines its properties:

```
createCampaign(ERC721 _token, uint _lifetime, uint _token_price, uint _host_share)
```

where:

1) **ERC721 token adress**. Effectively, it defines the game for this campaign, as typically every
game owns the ERC721 token.
2) the **lifetime** of the prize to be converted. This is the maximum time in seconds between the moment claiming
the token as a prize and the conversion it to IZX value. The lifetime is introduced to prevent players to
claim the prize and never convert them, which will spend advertiser budget and will not drive audience to it.
3) **token price** in IZX. This is the price advertiser will pay for every converted ERC721 token
4) **host share** is the percentage fraction of token price, payed to the host of the campaign as a commission.

In essense, the campaign is the conversion funnel between ERC-721 tokens and IZX ERC-20 tokens by specific rules.
The sponsor of the campaign are advertisers, which owns the balance of IZX tokens and approved IZX usage in the 
campaign.

Sources are located in [Campaign.sol](contracts/game/Campaign.sol).

### Auction Smart Contract

Auction is the contract between the host ( who can be the game developer), buyer and seller of ERC-721 tokens.
When creating a new auction, the host defines its properties:

```
createAuction(ERC721 _token, uint _host_share)
```

where:

1) **ERC721 token adress**. Effectively, it defines the game for this auction, as typically every
game owns the ERC721 token.
2) **host share** is the percentage fraction of successfull bid, payed to the host of the auction as a commission.

Auction is a pretty basic scenario of the first-price auction. Sellers sell ERC721 tokens, that they own for IZX
amount. The auction allows sellers to set minimum price, immedeate sale price and the duration for the auction.

Sources are located in [Auction.sol](contracts/game/Auction.sol).


### TokenDriver smart contract

TokenDriver is a IZX token controller, allowing to create campaigns and auctions and controlling the token
transfers and approvals:

1) transfers and approvals are allowed with no limitations to any non-contract Ethereum addresses
2) smart contracts are not allowed as a destinations for transfers and approvals unless they are created 
in TokenDriver as campaigns and auctions. This rule ensures that the token will not be accidentally sent to
wrong smart contract. Also it ensures the protocol execution to be appied for all IZX token operations.

Sources are located in [TokenDriver.sol](contracts/drive/TokenDriver.sol).

### DriveToken smart contract

DriveToken is ERC-721 token to be used in IZX AR geo game. 
It has additional extensions to the standard interface:

1) mint/burn methods, allowing the game to generate new tokens and burn them if needed
2) association mapping to data, which will store the encoded properties of the token in game,
as the geo location, icon, message and others. The data can be stored directly, or using IPFS 
with the hash stored in the data.

Sources are located in [DriveToken.sol](contracts/drive/DriveToken.sol).


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