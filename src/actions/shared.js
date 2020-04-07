import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import {saveQuestion} from '../utils/api';
import {saveQuestionAnswer} from '../utils/api';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        //dispatch(setAuthedUser(AUTHED_ID))
      })
  }
} 

const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export const handleAddQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    .then((question) => dispatch(addQuestion(question)))
  }
}


const addQuestionAnswer = info => {
  return {
    type: ADD_QUESTION_ANSWER,
    info
  }
}

export const handleAddQuestionAnswer = (qid, answer) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const info = {
      qid,
      answer,
      author: authedUser
    }
    return saveQuestionAnswer(info)
    .then(() => dispatch(addQuestionAnswer(info)));
  }
}