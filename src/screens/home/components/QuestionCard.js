import React from 'react'
import { Link } from 'react-router-dom'
import './QuestionCard.css'

const QuestionCard = props => {
    
    const {id, text, name, avatarURL } = props
    const truncatedText = text.length <= 15 ? text : text.substring(0, 15);

    return (
     <div className="QuestionCard">
       <h3 className="QuestionCard-h3">{`${name} asks...`}</h3>    
       <div className="QuestionCard-container">
           <div className="QuestionCard-img-container">
             <img src={`${avatarURL}`} alt={`${name}`} />
           </div>
           <div className="QuestionCard-question-container">
             <h4>Would you rather</h4>
             <p>{`...${truncatedText}...`}</p>
             <Link to={`question/${id}`}>View Poll</Link>
           </div>   
       </div>
     </div>
    )
}

export default QuestionCard