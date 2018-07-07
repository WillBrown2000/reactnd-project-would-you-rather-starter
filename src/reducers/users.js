import { RECEIVE_USERS, ADD_VOTE, ADD_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {

    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_VOTE :

          const { vote, authedUser } = action
          const key = Object.keys(vote)[0]
          const answer = Object.values(vote)[0]
          const notAnswer = answer === 'optionOne' ? 'optionTwo' : 'optionOne'
          let newStateAnswer = {}

          if (state[authedUser]['answers'][key] === answer) return { ...state } //authedUser already voted for this
          if (Object.values(state[authedUser]['answers'][key] === notAnswer))  {

            newStateAnswer = {
              [authedUser] : {
                   ...state[authedUser],
                   'answers': {
                     ...state[authedUser]['answers'],
                       [key] : answer
                   }
              }
            }
          }
            else {

              newStateAnswer = {
                [authedUser] : {
                     ...state[authedUser],
                     'answers': {
                       ...state[authedUser]['answers'].concat(vote)
                     }
                }
              }
            }
            return {
              ...state,
              ...newStateAnswer,
            }
    case ADD_QUESTION :

          const { author, id } = action.question
          console.log('state ', state)
          console.log('id', id)

            let newStateQuestion = {
                [author] : {
                     ...state[author],
                     'questions': [
                       ...state[author]['questions'],
                       id
                     ]
                }
              }
            return {
              ...state,
              ...newStateQuestion,
            }
    default :
      return state
  }
}
