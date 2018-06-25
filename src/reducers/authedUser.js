import { SET_AUTHED_USER, SET_LOGIN_STATUS } from '../actions/authedUser'

export function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.id
    default :
      return state
  }
}

export function loggedIn (state = null, action) {
  switch (action.type) {
    case SET_LOGIN_STATUS :
      return action.loggedIn
    default :
      return state
  }
}
