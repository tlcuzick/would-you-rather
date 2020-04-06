import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {handleAddQuestion} from '../../actions/shared';
import './CreateQuestion.css';

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
  
  
  handleSubmit = () => {
    const {optionOne, optionTwo} = this.state;
    
    if(optionOne.length > 0 && optionTwo.length > 0) {
      this.props.dispatch(handleAddQuestion(optionOne, optionTwo));
      this.props.history.push('/');      
    }
  }
  
  render() {
    
    return (
      <div className="CreateQuestion-container">
        <h1 className="CreateQuestion-h1">Create New Question</h1>
        <h3 className="CreateQuestion-h3">Complete the question:</h3>
        <h2 className="CreateQuestion-h2">Would you rather...</h2>
        <TextField 
          error={this.state.optionOne.length === 0}
          value={this.state.optionOne}
          onChange={this.handleOptionOneChange}
          label="Option One" 
          variant="outlined"
          className="CreateQuestion-text-input"
        />
        <div className="CreateQuestion-divider">OR</div>
        <TextField
          error={this.state.optionTwo.length === 0}
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

export default withRouter(connect()(CreateQuestion));