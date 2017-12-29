pragma solidity ^0.4.11;

import '../token/ControlledToken.sol';

contract FreeGameToken is ControlledToken {

   function FreeGameToken() ControlledToken( 1, 'Free Game Token', 18, 'FGT' ) public {}

}