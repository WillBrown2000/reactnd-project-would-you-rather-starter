export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function setLoginStatus (loggedIn) {
  return {
    type: SET_LOGIN_STATUS,
    loggedIn,
  }
}
