import React, {Component} from 'react'
import { connect } from 'react-redux';
import QuestionCard from './components/QuestionCard'
import './Home.css';

class Home extends Component {
 
  state = {
    displayAnswered: false
  }
  
  filterQuestions = (questions, authedUser, displayAnswered) => {
    return questions.filter(question => {
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
      console.log(this.props);
      const {authedUser, questions} = this.props;
    
      const filteredQuestions = 
        this.filterQuestions(
          questions,
          authedUser,
          this.state.displayAnswered
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

const mapStateToProps = ({ authedUser, users, questions }) => {
  
  const questionIDs = Object.keys(questions);
  
  const questionData = questionIDs.map(questionID => {
    const question = questions[questionID];
    const {name, avatarURL} = users[question.author];
    return {...question, name, avatarURL}
  })
  .sort((a, b) => b.timestamp - a.timestamp )
  
  return {
    authedUser,
    questions: questionData
  }
}

export default connect(mapStateToProps)(Home)