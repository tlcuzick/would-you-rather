import { RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/shared';

export const questions = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ADD_QUESTION_ANSWER:
      const {qid, answer, author} = action.info;
      
       return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([author])
          }
        }
      }
      
    default :
      return state
  }
}