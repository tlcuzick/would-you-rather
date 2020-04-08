import React, {Component} from 'react'
import { connect } from 'react-redux';
import QuestionCard from './components/QuestionCard'
import {displayAnswered, displayUnanswered} from '../../actions/displayAnswered';
import './Home.css';

class Home extends Component {
  
  filterQuestions = (questions, authedUser, displayAnswered) => {
    return questions.filter(question => {
        const answers = question.optionOne.votes.concat(question.optionTwo.votes)
        const answered = answers.includes(authedUser);
        return displayAnswered ? answered : !answered
    })
  }
  
  displayUnanswered = () => {
    this.props.dispatch(displayUnanswered())
  }    
  
  displayAnswered = () => {
    this.props.dispatch(displayAnswered())    
  }
  
render() {
      const {authedUser, questions} = this.props;
    
      const filteredQuestions = 
        this.filterQuestions(
          questions,
          authedUser,
          this.props.displayAnswered
        )
        .map(question => {
          const updatedQuestion = {
            id: question.id,
            text: question.optionOne.text,
            name: question.name,
            avatarURL: question.avatarURL
          }
          return <QuestionCard key={updatedQuestion.id} {...updatedQuestion} />
        })
        
        const selectedButtonStyle = {
          color: '#20B2AA',
          backgroundColor: '#E0E0E0'
        }
        
      return (
          <div className="Home-container">
            <div className="Home-button-container">
                <div
                  className="Home-button"
                  onClick={this.displayUnanswered}
                  style={this.props.displayAnswered ? null: selectedButtonStyle}                  
                >
                  <span>Unanswered Questions</span>
                </div>
                <div
                  className="Home-button"
                  onClick={this.displayAnswered}
                  style={this.props.displayAnswered ? selectedButtonStyle: null}
                >
                  <span>Answered Questions</span>
                </div>
            </div>            
            {filteredQuestions}
          </div>
      )        
    }
}

const mapStateToProps = ({ authedUser, users, questions, displayAnswered }) => {
  
  const questionIDs = Object.keys(questions);
  
  const questionData = questionIDs.map(questionID => {
    const question = questions[questionID];
    const {name, avatarURL} = users[question.author];
    return {...question, name, avatarURL}
  })
  .sort((a, b) => b.timestamp - a.timestamp )
  
  return {
    authedUser,
    questions: questionData,
    displayAnswered
  }
}

export default connect(mapStateToProps)(Home)