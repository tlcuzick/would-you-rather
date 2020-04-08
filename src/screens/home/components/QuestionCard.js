import React from 'react';
import { Link } from 'react-router-dom';
import './QuestionCard.css';

const QuestionCard = props => {
  const { id, text, name, avatarURL } = props;
  const truncatedText = text.length <= 15 ? text : text.substring(0, 15);

  return (
    <div className='QuestionCard'>
      <div className='QuestionCard-header'>
        <h3 className='QuestionCard-header-text'>{`${name} asks...`}</h3>
      </div>
      <div className='QuestionCard-container'>
        <div className='QuestionCard-img-container'>
          <img alt={name} src={avatarURL} className='QuestionCard-img' />
        </div>
        <div className='QuestionCard-question-container'>
          <h4>Would you rather</h4>
          <p>{`...${truncatedText}...`}</p>
          <Link to={`question/${id}`} className='QuestionCard-button'>
            <span className='QuestionCard-button-text'>View Poll</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;