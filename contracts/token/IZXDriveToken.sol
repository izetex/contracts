pragma solidity ^0.4.11;

import './ControlledToken.sol';

contract IZXDriveToken is ControlledToken {

   function IZXDriveToken() ControlledToken( 1, 'IZX Drive', 18, 'DRIVE' ) public {}

}