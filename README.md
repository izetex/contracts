# IZX Smart Contracts

## Smart Contracts

### IZXToken

### TokenSale

### Game

Game is a contract to perform the game by guessing seed to hash.

Rules of the game are:

1) Game issuer places number of prizes, identified by hashes. The seed to calculate that hashes are unknown
  and  kept in secret
2) Players play the game, and the issuer may give a secret seed to a winner. Winner claims the prize and gets a reward

The reward can be distributed in arbitrary way, depending on the sub-classed contract for a real game.
Look FreeGame and RevShareGame for real examples. The contract can be extended by overriding methods
calculate_amount and payout, which defines how to calculate the prize value and pay reward to winner, issuer,
game owner and others.

The prize is issued using a token reservation. The token controls the amount pf prize to be issued.
Token owners first allow the game to transfer certain amount of tokens, the GameController contract is responsibe for this.

The prize can be set to be expired at some moment in the future. When expired, tokens will be returned to token owners,
and money returned to issuer.

Money are pulled from the contract using the withdraw() method.
 
 
#### FreeGame

#### RevShareGame

### GameController

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
    ✓ should have IZX symbol (41ms)

  Contract: Wallet
    ✓ should have 5 owners
    ✓ should require 3 owners

  Contract: TokenSale
    ✓ should have set exchange rate
    ✓ should have set wallet
    ✓ should have set token
    ✓ should set controller for token (60ms)
    ✓ should transfer tokens by ETH transfer (1894ms)
    ✓ should change ETH rate (2277ms)
    ✓ should distribute tokens (318ms)
    ✓ should disable transfer tokens (238ms)
    ✓ should enable transfer tokens (269ms)
    ✓ should change controller
    ✓ should protect to change controller (172ms)
    ✓ should protect distribute tokens (94ms)


  17 passing (6s)
```

## Executing deployment scripts

Crowdsale contract deployment and management scripts are located in script directory.
They are called as node scripts:
```
npm install
node script/deploy_contract
```

Every script contains variable, defining the environment to run: 
```
const environment = 'ropsten'; // ropsten/foundation, change to foundation to deploy to real
```

Configuration in script/config.js contains all properties for selected environment.

On script run, it asks for credentials, and asks to enter word 'Yes!' before actual execution. After successfull run, it logs the hash of transaction,
that should be looked up in ethereum explorer.

Scripts are:

*script/deploy_contract** - deploys the crowdsale contract with the specified token and 
  vault in the configuration
*script/change_controller** - changes the controller for the token. If token alredy has a crowdsale defined as a 
  controller, it uses the method in crowdsale contract. Otherwise, it calls the token method directly
*script/set_rate** - modifies the exhange rate USD/ETH for crowdsale contract. First it reads the old value and queries for
  the current rate from etherscan.io
*script/distribute_tokens** - transfers tokens to the owners in the list
*script/send_eth** - sends ether to an address
  

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