import { VOTE_ON_QUESTION } from '../actions/questions'
import {RECEIVE_QUESTIONS} from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case VOTE_ON_QUESTION :

      const { answer, qid, authedUser } = action

      let newQuestionState = {
        [qid] : {
             ...state[qid],
             [answer]: {
               ...state[qid][answer],
               votes: state[qid][answer].votes.concat(authedUser)
          }
        }
      }

      return {
        ...state,
        ...newQuestionState,
      }

    case RECEIVE_QUESTIONS :

      console.log('passing state through reducer')

      return {
        ...state,
        ...action.questions,
      }

    default :
      return state
  }
}
