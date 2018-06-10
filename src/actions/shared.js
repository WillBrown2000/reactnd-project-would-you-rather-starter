import { getInitialData } from '../utils/api'
import { receiveQuestions } from '../actions/polls'
import { receiveUsers } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis' // TODO replace with authedUser from login page.

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({questions, users}) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}
