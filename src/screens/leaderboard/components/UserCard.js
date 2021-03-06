import React from 'react';
import './UserCard.css';

const UserCard = props => {
  const { avatarURL, name, numAnswers, numQuestions, score } = props;
  return (
    <div className='UserCard'>
      <div className='UserCard-img-container'>
        <img className='UserCard-img' src={avatarURL} alt={name} />
      </div>
      <div className='UserCard-questions-container'>
        <h2>{name}</h2>
        <div className='UserCard-questions'>
          <p>Answered questions</p>
          <p>{numAnswers}</p>
        </div>
        <div className='UserCard-questions'>
          <p>Created questions</p>
          <p>{numQuestions}</p>
        </div>
      </div>
      <div className='UserCard-score-container'>
        <div className='UserCard-score-header'>
          <h3 className='UserCard-score-header-text'>Score</h3>
        </div>
        <div className='UserCard-score-card'>
          <div className='UserCard-score'>
            <span>{score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;