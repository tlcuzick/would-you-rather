import React from 'react';
import './PollResultsCard.css';

const PollResultsCard = props => {
  const { question, totalVotes, authedUser, winningQuestion } = props;
  const { votes, text } = question;
  const resultsPercentage = `${Math.round(
    100 * ((votes.length * 1.0) / totalVotes),
    2
  )}%`;
  const resultsText = `${votes.length} out of ${totalVotes} votes`;

  const winningQuestionStyle = {
    color: '#20B2AA',
    backgroundColor: '#C9F2F0',
    border: '1px solid #20B2AA'
  };

  const pollResultsCardStyle = winningQuestion ? winningQuestionStyle : null;

  return (
    <div className='PollResultsCard' style={pollResultsCardStyle}>
      <h3>
        {text}
        {votes.includes(authedUser) && (
          <span className='PollResultsCard-your-vote'> - Your vote!</span>
        )}
      </h3>
      <div className='PollResultsCard-bar-container'>
        <div
          className='PollResultsCard-bar'
          style={{ width: resultsPercentage }}>
          {resultsPercentage}
        </div>
      </div>
      <p>{resultsText}</p>
    </div>
  );
};

export default PollResultsCard;