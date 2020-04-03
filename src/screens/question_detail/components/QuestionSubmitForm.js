import React, {Component} from 'react'
import './QuestionSubmitForm.css'

class QuestionSubmitForm extends Component {
    state = {
        selectedOption: 'option1'
    }
    
    handleOptionChange = e => {
      this.setState({selectedOption: e.target.value});
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const {optionOne, optionTwo} = this.props;
        alert(this.props.authedUser);
        alert(this.state.selectedOption === 'option1' ? optionOne.text: optionTwo.text);
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
                            value="option1"
                            checked={this.state.selectedOption === 'option1'}
                            onChange={this.handleOptionChange}
                        />
                        {optionOne.text}
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                            type="radio"
                            value="option2"
                            checked={this.state.selectedOption === 'option2'}
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

export default QuestionSubmitForm;