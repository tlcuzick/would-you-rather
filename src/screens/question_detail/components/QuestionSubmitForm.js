import React, {Component} from 'react'
import {connect} from 'react-redux';
import {handleAddQuestionAnswer} from '../../../actions/shared';
import './QuestionSubmitForm.css'

class QuestionSubmitForm extends Component {
    state = {
        selectedOption: 'optionOne'
    }
    
    handleOptionChange = e => {
      this.setState({selectedOption: e.target.value});
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.dispatch(handleAddQuestionAnswer(this.props.id, this.state.selectedOption))
    }
    
    render() {
        const {optionOne, optionTwo, author, name, avatarURL} = this.props;
        
        return (
         <div className="QuestionSubmitForm">
           <h3 className="QuestionSubmitForm-h3">{`${name} asks...`}</h3>    
           <div className="QuestionSubmitForm-container">
               <div className="QuestionSubmitForm-img-container">
                 <img src={`${avatarURL}`} alt={`${name}`} />
               </div>
               <div className="QuestionSubmitForm-question-container">
                 <h2>Would You Rather...</h2>
                 <form onSubmit={this.handleSubmit}>
                    <div className="radio">
                      <label>
                        <input
                            type="radio"
                            value="optionOne"
                            checked={this.state.selectedOption === 'optionOne'}
                            onChange={this.handleOptionChange}
                        />
                        {optionOne.text}
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                            type="radio"
                            value="optionTwo"
                            checked={this.state.selectedOption === 'optionTwo'}
                            onChange={this.handleOptionChange}                            
                        />
                        {optionTwo.text}
                      </label>
                      <div>
                        <button>Submit</button>
                      </div>
                    </div>                 
                 </form>
               </div>   
           </div>
         </div>            
        )
    }
}

export default connect()(QuestionSubmitForm);