import { getInitialData } from '../utils/api'
import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser, setLoginStatus } from '../actions/authedUser'

const AUTHED_ID = 'loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({questions, users}) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
        dispatch(setLoginStatus(false))
      })
  }
}
