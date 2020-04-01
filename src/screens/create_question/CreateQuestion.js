import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import './CreateQuestion.css';
import { v4 as uuid} from 'uuid';

class CreateQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }
  
  handleOptionOneChange = event => {
    this.setState({optionOne: event.target.value})
  }
  
  handleOptionTwoChange = event => {
    this.setState({optionTwo: event.target.value})
  }
  
  createQuestionObj = () => {
    const date = new Date();
    const timestamp = date.getTime();
    
    return {
      id: uuid(),
      author: this.props.authedUser,
      timestamp,
      optionOne: {
        votes: [],
        text: this.state.optionOne
      },
      optionTwo: {
        votes: [],
        text: this.state.optionTwo
      }      
    }    
  }
  
  handleSubmit = () => {
    const question = this.createQuestionObj();
    console.log(question);
    this.setState({optionOne: '', optionTwo: ''});
  }
  
  render() {
    return (
      <div className="CreateQuestion-container">
        <h1 className="CreateQuestion-h1">Create New Question</h1>
        <h3 className="CreateQuestion-h3">Complete the question:</h3>
        <h2 className="CreateQuestion-h2">Would you rather...</h2>
        <TextField 
          value={this.state.optionOne}
          onChange={this.handleOptionOneChange}
          label="Option One" 
          variant="outlined"
          className="CreateQuestion-text-input"
        />
        <div className="CreateQuestion-divider">OR</div>
        <TextField 
          value={this.state.optionTwo}
          onChange={this.handleOptionTwoChange}
          label="Option Two" 
          variant="outlined"
          className="CreateQuestion-text-input"          
        />
        <div onClick={this.handleSubmit} className="CreateQuestion-button">
          <span className="CreateQuestion-button-text">Submit</span>
        </div>        
      </div>
    )
  }
}

CreateQuestion.defaultProps = {
  authedUser: 'sarahedo'
}

export default CreateQuestion;