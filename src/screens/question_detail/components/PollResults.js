import React  from 'react'
import './PollResults.css';
import PollResultsCard from './PollResultsCard';

const PollResults = props => {
    
      const {authedUser, optionOne, optionTwo, author, name, avatarURL} = props;
    
      const totalVotes = optionOne.votes.length + optionTwo.votes.length;
      const winningQuestion = optionOne.votes.length >= optionTwo.votes.length ? optionOne : optionTwo;
      const losingQuestion = optionOne.votes.length >= optionTwo.votes.length ? optionTwo : optionOne;
      
      
      return (
         <div className="PollResults">
           <h3 className="PollResults-h3">{`Asked by ${name}`}</h3>    
           <div className="PollResults-container">
               <div className="PollResults-img-container">
                 <img src={`${avatarURL}`} alt={`${name}`} />
               </div>
               <div className="PollResults-question-container">
                 <h2>Results</h2>
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
      )
}

export default PollResults