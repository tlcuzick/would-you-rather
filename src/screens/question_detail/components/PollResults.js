import React from 'react';
import './PollResults.css';
import PollResultsCard from './PollResultsCard';

const PollResults = props => {
  const { authedUser, optionOne, optionTwo, name, avatarURL } = props;

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const winningQuestion =
    optionOne.votes.length >= optionTwo.votes.length ? optionOne : optionTwo;
  const losingQuestion =
    optionOne.votes.length >= optionTwo.votes.length ? optionTwo : optionOne;

  return (
    <div className='PollResults'>
      <div className='PollResults-header'>
        <h3 className='PollResults-header-text'>{`Asked by ${name}`}</h3>
      </div>
      <div className='PollResults-container'>
        <div className='PollResults-img-container'>
          <img
            className='PollResults-img'
            src={`${avatarURL}`}
            alt={`${name}`}
          />
        </div>
        <div className='PollResults-question-container'>
          <h2 className='PollResults-h2'>Results</h2>
          <PollResultsCard
            authedUser={authedUser}
            question={winningQuestion}
            totalVotes={totalVotes}
            winningQuestion={true}
          />
          <PollResultsCard
            authedUser={authedUser}
            question={losingQuestion}
            totalVotes={totalVotes}
            winningQuestion={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PollResults;