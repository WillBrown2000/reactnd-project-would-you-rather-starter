export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_VOTE = 'ADD_VOTE'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addVote ({vote, authedUser}) {
  return {
    type: ADD_VOTE,
    authedUser,
    vote,
  }
}

export function addQuestion (id) {
  return {
    type: ADD_QUESTION,
    id,
  }
}
