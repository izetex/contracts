pragma solidity ^0.4.18;


contract ControlledByVote {

    address     candidate;
    bool        voted;


    modifier onlyVotedFor(address _vote_for) {
        require(candidate == _vote_for);
        require(voted);
        _;
    }






}