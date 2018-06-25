import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import { authedUser, loggedIn } from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  questions,
  users,
  authedUser,
  loggedIn,
})
