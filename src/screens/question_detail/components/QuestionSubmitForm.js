import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../../../actions/shared';
import './QuestionSubmitForm.css';

class QuestionSubmitForm extends Component {
  state = {
    selectedOption: 'optionOne'
  };

  handleOptionChange = e => {
    this.setState({ selectedOption: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      handleAddQuestionAnswer(this.props.question_id, this.state.selectedOption)
    );
  };

  render() {
    const { optionOne, optionTwo, name, avatarURL } = this.props;

    return (
      <div className='QuestionSubmitForm'>
        <div className='QuestionSubmitForm-header'>
          <h3 className='QuestionSubmitForm-header-text'>{`${name} asks...`}</h3>
        </div>
        <div className='QuestionSubmitForm-container'>
          <div className='QuestionSubmitForm-img-container'>
            <img
              src={`${avatarURL}`}
              alt={`${name}`}
              className='QuestionSubmitForm-img'
            />
          </div>
          <div className='QuestionSubmitForm-question-container'>
            <h2>Would You Rather...</h2>
            <form onSubmit={this.handleSubmit}>
              <div className='QuestionSubmitForm-radio'>
                <label>
                  <input
                    type='radio'
                    value='optionOne'
                    checked={this.state.selectedOption === 'optionOne'}
                    onChange={this.handleOptionChange}
                  />
                  {optionOne.text}
                </label>
              </div>
              <div className='QuestionSubmitForm-radio'>
                <label>
                  <input
                    type='radio'
                    value='optionTwo'
                    checked={this.state.selectedOption === 'optionTwo'}
                    onChange={this.handleOptionChange}
                  />
                  {optionTwo.text}
                </label>
                <div>
                  <button className='QuestionSubmitForm-button'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(QuestionSubmitForm);