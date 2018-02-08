pragma solidity ^0.4.18;

import '../token/IZXToken.sol';

contract TokenDriver  {

    IZXToken  public token;

    struct Approval {
        uint256 key_index;
        uint256 tokens;
        uint256 min_value;
    }

    address[] holders;
    mapping( address => Approval) approvals;

    function TokenDriver(IZXToken _token) public {
        token = _token;
    }

    function grant_tokens(uint256 _max_tokens, uint256 _min_value) public {
        require(token.balanceOf(msg.sender) >= _max_tokens);
        Approval storage approval = approvals[msg.sender];

        if(approval.key_index==0){
            uint next = holders.length++;
            holders[next] = msg.sender;
            approval.key_index = next + 1;
        }
        
        approval.tokens = _max_tokens;
        approval.min_value = _min_value;

    }

    function reserve_tokens(uint256 _tokens, uint256 _value) internal returns(address) {
        address holder = holder_approved(_tokens, _value);
        token.transferFrom(holder, address(this), _tokens);
        return holder;
    }

    function release_tokens(address _holder, uint256 _tokens) internal {
        token.transfer(_holder, _tokens);
    }

    function holder_approved(uint256 _tokens, uint256 _value) private returns(address){

        uint256 count = holders.length;
        uint256 i = (block.timestamp % count);
        for(uint j = 0; j < count; j++ ){
            address holder = holders[i];
            Approval storage approval = approvals[holder];
            if(_tokens <= approval.tokens && _value > approval.min_value && token.balanceOf(holder)>=_tokens){
               approval.tokens = approval.tokens - _tokens;
               return holder;
            }

            i++;
            if(i==count){
                i=0;
            }

        }
        revert();
    }

}