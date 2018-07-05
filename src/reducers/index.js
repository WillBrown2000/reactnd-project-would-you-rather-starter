import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import { authedUser, loggedIn } from './authedUser'

export default combineReducers({
  questions,
  users,
  authedUser,
  loggedIn,
})
