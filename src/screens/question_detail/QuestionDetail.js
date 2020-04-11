import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionSubmitForm from './components/QuestionSubmitForm';
import PollResults from './components/PollResults';
import NotFound from '../../shared_components/NotFound';
import './QuestionDetail.css';

class QuestionDetail extends Component {
  render() {
    const {
      question_id,
      question_ids,
      authedUser,
      question,
      name,
      avatarURL,
    } = this.props;

    if (question_ids.length > 0 && !question_ids.includes(question_id)) {
      return <NotFound />;
    } else if (!question) {
      return null;
    } else {
      return (
        <div className='QuestionDetail-container'>
          {question.optionOne.votes
            .concat(question.optionTwo.votes)
            .includes(authedUser) ? (
            <PollResults
              optionOne={question.optionOne}
              optionTwo={question.optionTwo}
              name={name}
              avatarURL={avatarURL}
              authedUser={authedUser}
            />
          ) : (
            <QuestionSubmitForm
              question_id={question_id}
              optionOne={question.optionOne}
              optionTwo={question.optionTwo}
              name={name}
              avatarURL={avatarURL}
              authedUser={authedUser}
            />
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { question_id } = props.match.params;
  const question = questions[question_id];
  const { name, avatarURL } = question
    ? users[question.author]
    : { name: '', avatarURL: '' };
  return {
    question_id,
    question_ids: Object.keys(questions),
    authedUser,
    name,
    avatarURL,
    question,
  };
};

export default connect(mapStateToProps)(QuestionDetail);