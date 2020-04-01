import React, {Component} from 'react'
import './PollResults.css';
import PollResultsCard from './PollResultsCard';

class PollResults extends Component {
 
  state = {
    authedUser: 'sarahedo',
    users: {
      sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://www.gravatar.com/avatar/088a603eeddafecbbac2cda572e6894e?d=retro',
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionOne',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      },
      tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'https://www.gravatar.com/avatar/5288b46931879d666e7da8f59a627a3e?d=retro',
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
      },
      johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'https://www.gravatar.com/avatar/6579e96f76baa00787a28653876c6127?d=retro',
        answers: {
          "xj352vofupe1dqz9emx13r": 'optionOne',
          "vthrdm985a262al8qx3do": 'optionTwo',
          "6ni6ok3ym7mf1p33lnez": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
      }
    },
    
    questions: {
      "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
          votes: ['sarahedo'],
          text: 'have horrible short term memory',
        },
        optionTwo: {
          votes: [],
          text: 'have horrible long term memory'
        }
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1467166873333,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['johndoe', 'sarahedo'],
          text: 'become a supervillian'
        }
      },
      "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
          votes: [],
          text: 'be telekinetic',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be telepathic'
        }
      },
      "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
          votes: [],
          text: 'be a front-end developer',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be a back-end developer'
        }
      },
      "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
          votes: ['tylermcginnis'],
          text: 'find $50 yourself',
        },
        optionTwo: {
          votes: ['johndoe'],
          text: 'have your best friend find $500'
        }
      },
      "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
          votes: ['johndoe'],
          text: 'write JavaScript',
        },
        optionTwo: {
          votes: ['tylermcginnis'],
          text: 'write Swift'
        }
      },
    }
  }
  
    getQuestionDetails = questionID => {
        const {optionOne, optionTwo, author} = this.state.questions[this.props.questionID];
        const {name, avatarURL} = this.state.users[author];
        return {optionOne, optionTwo, author, name, avatarURL};
    }
  
render() {
    
      const {optionOne, optionTwo, author, name, avatarURL} = this.getQuestionDetails(this.props.questionID);
    
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
                    authedUser={this.state.authedUser}
                    question={winningQuestion}
                    totalVotes={totalVotes}
                    winningQuestion={true}
                 />
                 <PollResultsCard
                    authedUser={this.state.authedUser}
                    question={losingQuestion}
                    totalVotes={totalVotes}
                    winningQuestion={false}
                 />
               </div>   
           </div>
         </div>
      )        
    }
}

export default PollResults