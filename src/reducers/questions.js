import { RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_QUESTION } from '../actions/shared';

export const questions = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      console.log('test')
      return {
        ...state,
        [action.question.id]: action.question
      }
      
    default :
      return state
  }
}