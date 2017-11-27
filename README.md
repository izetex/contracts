# contracts
IZX Smart Contracts

## Installation

```
npm install -g ethereumjs-testrpc
npm install -g truffle
```

## Running tests

Tests can be run using Test RPC. Run it with command

```
testrpc -m "warrior minimum breeze raven garden express solar flavor obvious twenty alpha actress"
```

And then run tests

```
$ truffle test test/token_sale.js
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

## Note on console usage

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