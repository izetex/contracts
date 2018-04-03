pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import '../token/ERC20.sol';

/**
 * @title ControlledByVote
 *
 * @dev ControlledByVote is contract between token holders, which can vote
 * for a candidate by transfering the token they own.
 *
 * The duration of the voting procedure is limited by min and max voting duration.
 * The voting starts on call startVoting method, with the new candidate as argument and
 * finishes_at timestamp of the voting completion.
 * Token holders then can transfer their token to this contract or to candidate on their choice.
 * On the finishes_at time or later, method finishVoting can be called, which calculates
 * the balances of token on this contract and on candidate, compares them and makes a decision
 * who wins.
 *
 * @author Aleksey Studnev <studnev@izx.io>
 */
contract ControlledByVote {

    ERC20               public  token;
    uint                public  min_voting_duration;
    uint                public  max_voting_duration;

    ControlledByVote    public  candidate;
    uint                public  finishes_at;
    bool                public  voices_counted;
    bool                public  candidate_wins;

    event VotingStarted( address indexed candidate, address indexed token, uint finishes_at);
    event VotingCompleted( address indexed candidate, address indexed token, bool candidate_wins, uint voices_pro, uint voices_cons);

    using SafeMath for uint256;

    /**
    * @dev Throws if called when voting is in progress
    */
    modifier onlyNoVoting() {
        if(address(candidate) != address(0)){
            require(now > finishes_at);
            require(voices_counted);
            require(!candidate_wins);
        }
        _;
    }

    /**
    * @dev Throws if called with argument which is not winner in voting
    */
    modifier onlyVotedFor(ControlledByVote _vote_for) {
        require(candidate != address(0));
        require(candidate == _vote_for);

        require(now > finishes_at);
        require(voices_counted);
        require(candidate_wins);

        _;
    }

    /**
    * @dev constructor for the contract
    * @param _token used for voting
    * @param _min_voting_duration minimum duration of voting in seconds
    * @param _max_voting_duration maximum duration of voting in seconds
    */
    function ControlledByVote( ERC20 _token, uint _min_voting_duration, uint _max_voting_duration ) public {
        require( address(_token) != address(0));
        require( _max_voting_duration >= _min_voting_duration);
        require( _max_voting_duration > 0 );
        token = _token;
        min_voting_duration = _min_voting_duration;
        max_voting_duration = _max_voting_duration;
    }

    /**
    * @dev starts new voting if allowed
    * @param _candidate new candidate for voting
    * @param _finishes_at timestampp of voting completion
    */
    function startVoting(ControlledByVote _candidate, uint _finishes_at) onlyNoVoting public {
        require(address(_candidate) != address(0));
        require(_candidate.token() == token);
        require(_finishes_at >= now.add(min_voting_duration));
        require(_finishes_at <= now.add(max_voting_duration));

        candidate = _candidate;
        finishes_at = _finishes_at;
        voices_counted = false;

        VotingStarted( candidate, token, finishes_at);
    }


    /**
    * @dev finish the voting
    */
    function finishVoting() public {

        require(address(candidate) != address(0));
        require(now > finishes_at);
        require(!voices_counted);

        uint voices_cons    = token.balanceOf(this);
        uint voices_pro     = token.balanceOf(candidate);

        candidate_wins = voices_pro > voices_cons;
        voices_counted = true;

        VotingCompleted( candidate, token, candidate_wins, voices_pro, voices_cons);

    }

    /**
    * @return true if voting is in progress
    */
    function votingInProgress() public view returns(bool){
        return candidate!=address(0) && (now <= finishes_at);
    }


}