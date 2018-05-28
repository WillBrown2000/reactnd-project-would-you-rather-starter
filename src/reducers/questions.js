import { VOTE_ON_QUESTION } from '../actions/polls'

export default function tweets (state = {}, action) {
  switch(action.type) {
    case VOTE_ON_QUESTION :

      console.log('state', state)

      const { option, questionID, user } = action

      state = state[questionID].option.votes.concat(user)

      return {
        ...state
      }

    default :
      return state
  }
}
