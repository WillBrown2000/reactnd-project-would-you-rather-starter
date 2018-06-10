import { VOTE_ON_QUESTION } from '../actions/polls'
import {RECEIVE_QUESTIONS} from '../actions/polls'

export default function tweets (state = {}, action) {
  switch(action.type) {
    case VOTE_ON_QUESTION :

      console.log('state', state)

      const { option, questionID, user } = action

      state = state[questionID].option.votes.concat(user)

      return {
        ...state
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
