pragma solidity ^0.4.11;

import './ControlledToken.sol';

contract IZXToken is ControlledToken {

   function IZXToken() ControlledToken( 1, 'IZX Token', 18, 'IZX' ) public {}

}