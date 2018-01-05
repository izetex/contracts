pragma solidity ^0.4.11;

import '../token/ControlledToken.sol';

contract GameToken is ControlledToken {

   function GameToken() ControlledToken( 0, 'Game Token', 18, 'FGT' ) public {}

}