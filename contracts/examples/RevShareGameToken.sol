pragma solidity ^0.4.11;

import '../token/ControlledToken.sol';

contract RevShareGameToken is ControlledToken {

   function RevShareGameToken() ControlledToken( 0, 'Rev Share Game Token', 18, 'RSGT' ) public {}

}