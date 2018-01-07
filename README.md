# IZX Smart Contracts and Game Protocol

The project contains:

1) IZX Game Protocol
2) IZX Crowdsale and Token Smart Contracts
3) Supporting scripts

## IZX Game Protocol

**IZX Game protocol** is a set of Ethereum Smart contracts to implement games on IZX token.
The protocol is mainly based on IZX White paper (published on [izx.io](https://izx.io)) web site.

The protocol consists of the following Smart contracts:

1) **Game** smart contract is the base abstract contract, defining basic rules
of the game. The game developer can sub-class from this contract to implement the new rules
or make a new game with IZX token.
2) **TokenGame** smart contract is an example of the game, where players 
exchange tokens without any value. Winner gets 1 token, initially owned by token
holder.
3) **RevShareGame** smart contract is another example of the game, which is close
to what is described in IZX White Paper. It distribues Ether, initially payed by
issuer (e.g. Advertiser) to initiate the game. Ether value is distributed between
game owner (developer), issuer, winner and token holder. All tokens, used in the game,
are ultimately returned to initial token holder.
4) **GameController** is the TokenController, which controls which token holder and in which extent
can participate in the game. This is conformant to IZX White Paper, which defines the rules and limitation
for token holders.

### Game Smart Contract

Sources are located in [Game.sol](contracts/game/Game.sol).

Game is a contract to perform the game by guessing seed to hash.

Rules of the game are:

1) Game issuer places number of prizes, identified by hashes. The seed to calculate that hashes are known
only to issuer and  kept in secret
2) Issuer gives the winner of the game the secret seed. Winner claims the prize and gets a reward

The reward can be distributed in arbitrary way, depending on the sub-classed contract for a real game.
Look TokenGame and RevShareGame for real examples. The contract can be extended by overriding methods
issue and payout, which defines how to calculate the prize value and pay reward to winner, issuer,
game owner and others.

The prize is issued using a token reservation. The token controls the amount pf prize to be issued.
Token owners first allow the game to transfer certain amount of tokens, the GameController contract is responsibe for this.

The prize can be set to be expired at some moment in the future. When expired, tokens will be returned to token owners,
and money returned to issuer.

Money are pulled from the contract using the withdraw() method.
 
### TokenGame Smart Contract
 
Sources are located in [TokenGame.sol](contracts/game/TokenGame.sol).

TokenGame is a contract to perform the game using just tokens ( no ether required). In the TokenGame, issuing prizes do not require Ether to pay.
Winner of the game receives 1 token, initially owned by token holder.


### RevShareGame

Sources are located in [RevShareGame.sol](contracts/game/RevShareGame.sol).

RevShareGame is a contract to perform the game with Ether payout to winner, game owner, issuer and token holder
in persentages. In the RevShareGame, issuing prizes happens on fixed prize price,
setup by game developer.


### GameController

Sources are located in [GameController.sol](contracts/game/GameController.sol).

GameController is a TokenController contract to calculate the amount of tokens,
  which can be used in the game.

The contract ensures, that the game can use the amount of tokens, allowed by
token holders. Note, that token holder may allow more tokens, that it holds, to more than one game.

After the tokens are used in prize, they are transfered to the game, and token holder apparently
may not use them before the prize is claimed or expired.

Contract also ensures the rotation of token holders, so that the last used token holder is placed
to the end of the queue. It guarantees that all token holders have the same chance to participate in the
game.

Game requests the amount of tokens from GameController using amount_owner() method.


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

  Contract: GameToken
    ✓ should have 18 digits
    ✓ should have 0 supply
    ✓ should have symbol (49ms)
    ✓ should have controller

  Contract: ProxyController
    ✓ should generate tokens to players (141ms)
    ✓ should allow transfer tokens from player to player (137ms)
    ✓ should allow approve tokens from player to player (175ms)
    ✓ should not allow transfer tokens to contract (238ms)

  Contract: GameController
    ✓ should accept tokens approval for prizes (306ms)
    ✓ should update tokens approval for prizes (132ms)
    ✓ should allow generate tokens to players throw proxy (130ms)
    ✓ should find amount_owner (126ms)
    ✓ should limit amount_owner by balance (47ms)

  Contract: RevShareGame
    ✓ should have initial balances of tokens for players (298ms)
    ✓ should allow issuer to issue prize (236ms)
    ✓ should give issuer change
    ✓ should allow change withdrawal by issuer (315ms)
    ✓ should allow zero withdrawal (308ms)
    ✓ should require ether for issuer to issue prize (56ms)
    ✓ should allow to claim the prize by winner (126ms)
    ✓ should return tokens to owner
    ✓ should distribute the prize fund between owner, issuer, game developer (54ms)
    ✓ should allow to withdraw (165ms)
    ✓ should not allow claim same prize second time (56ms)
    ✓ should allow owner to issue many prizes limited by value (234ms)
    ✓ should allow issuer to revoke by hash at any time (114ms)
    ✓ should return money to  issuer on revoke  (55ms)
    ✓ should revoke the prize after expiration (6160ms)
    ✓ should return money to  issuer on revoke  (59ms)
    ✓ should allow to revoke by hash (160ms)
    ✓ should return money to  issuer on revoke  (57ms)

  Contract: TokenGame
    ✓ should have initial balances of tokens for players (331ms)
    ✓ should allow owner to issue prize (218ms)
    ✓ should give the prize to winner (143ms)
    ✓ should not allow claim same prize second time (62ms)
    ✓ should allow owner to issue many prizes (226ms)
    ✓ should allow issuer to revoke by hash at any time (153ms)
    ✓ should revoke the prize after expiration (6161ms)
    ✓ should allow to revoke by hash (145ms)

  56 passing (20s)

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

## Validating contract sources

[solidity_flattener](https://github.com/BlockCatIO/solidity-flattener) generates full sources.
Note, that the unsupported parameter --allow-paths required, Before it is integrated into release of solidity_flattener,
use the installation from branch:
```
pip3 install git+https://github.com/dostu/solidity-flattener.git
```

Then execute:

```
solidity_flattener --allow-paths "$(pwd)/contracts" --output build/src/IZXDriveToken_flat.sol contracts/token/IZXDriveToken.sol
solidity_flattener --allow-paths "$(pwd)/contracts" --output build/src/TokenGame_flat.sol contracts/game/TokenGame.sol
solidity_flattener --allow-paths "$(pwd)/contracts" --output build/src/RevShareGame_flat.sol contracts/game/RevShareGame.sol
solidity_flattener --allow-paths "$(pwd)/contracts" --output build/src/GameController_flat.sol contracts/game/GameController.sol
solidity_flattener --allow-paths "$(pwd)/contracts" --output build/src/ProxyController_flat.sol contracts/token/ProxyController.sol

```