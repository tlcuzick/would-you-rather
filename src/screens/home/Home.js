import React, {Component} from 'react'
import QuestionCard from './components/QuestionCard'
import './Home.css';

class Home extends Component {
 
  state = {
    displayAnswered: false,      
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
  
  filterQuestions = (questionIDs, authedUser, displayAnswered) => {
    return questionIDs.filter(questionID => {
        const question = this.state.questions[questionID];
        const answers = question.optionOne.votes.concat(question.optionTwo.votes)
        const answered = answers.includes(authedUser);
        return displayAnswered ? answered : !answered
    })
  }
  
  displayUnanswered = () => {
    this.setState({displayAnswered: false}) 
  }    
  
  displayAnswered = () => {
    this.setState({displayAnswered: true}) 
  }
  
render() {
    
      const filteredQuestions = 
        this.filterQuestions(
          Object.keys(this.state.questions),
          this.state.authedUser,
          this.state.displayAnswered
        )
        .sort((a, b) => this.state.questions[a].timestamp - this.state.questions[b].timestamp )
        .map(filteredQuestionID => {
          const question = this.state.questions[filteredQuestionID];
          const {name, avatarURL} = this.state.users[question.author]
          const updatedQuestion = {text: question.optionOne.text, name, avatarURL}
          return <QuestionCard question={updatedQuestion} />
        })
        
        const selectedButtonStyle = {
          color: 'green',
          backgroundColor: '#D3D3D3'
        }
        
      return (
          <div className="Home-container">
            <div className="Home-button-container">
                <div
                  className="Home-button"
                  onClick={this.displayUnanswered}
                  style={this.state.displayAnswered ? null: selectedButtonStyle}                  
                >
                  <span>Unanswered Questions</span>
                </div>
                <div
                  className="Home-button"
                  onClick={this.displayAnswered}
                  style={this.state.displayAnswered ? selectedButtonStyle: null}
                >
                  <span>Answered Questions</span>
                </div>
            </div>            
            {filteredQuestions}
          </div>
      )        
    }
}

export default Home