// import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const INCREMENT_QUESTION = 'INCREMENT_QUESTION'
export const ADD_POLL= 'ADD_POLL'
export const VOTE_ON_QUESTION = 'VOTE_ON_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll,
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
function voteOnQuestion ({answer, qid, authedUser}) {

  return {
    type: VOTE_ON_QUESTION,
    answer,
    qid,
    authedUser
  }
}

export function handleVoteOnQuestion (info) {
  return (dispatch) => {
    dispatch(voteOnQuestion(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleVoteOnQuestion: ', e)
        dispatch(voteOnQuestion(info))
        alert('The was an error vote on the question. Try again.')
      })
  }
}
