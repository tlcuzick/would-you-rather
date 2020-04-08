import React, {Component} from 'react';
import { connect } from 'react-redux';
import QuestionSubmitForm from './components/QuestionSubmitForm';
import PollResults from './components/PollResults';
import './QuestionDetail.css';

class QuestionDetail extends Component  {

  render() {
    const {id, authedUser, question, name, avatarURL} = this.props;
    
    return (
        question && authedUser ? (
          <div className="QuestionDetail-container">
            {question.optionOne.votes.concat(question.optionTwo.votes).includes(authedUser) ? 
              (
              <PollResults
                optionOne={question.optionOne}
                optionTwo={question.optionTwo}
                name={name}
                avatarURL={avatarURL}
                authedUser={authedUser}
               />
               ) :
              (
              <QuestionSubmitForm
                id={id}
                optionOne={question.optionOne}
                optionTwo={question.optionTwo}
                name={name}
                avatarURL={avatarURL}
                authedUser={authedUser}
               />
               )
            }
          </div>
          ) : null
      )
  }
}

const mapStateToProps = ({authedUser, questions, users}, props) => {
  const { question_id } = props.match.params;  
  const question = questions[question_id];
  const {name, avatarURL} = question ? users[question.author] : {name: '', avatarURL: ''};
    return {
      id: question_id,
      authedUser,
      name,
      avatarURL,
      question
    }
}

export default connect(mapStateToProps)(QuestionDetail)