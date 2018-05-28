// import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

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
function voteOnQuestion (option, questionID, user) {

  return {
    type: VOTE_ON_QUESTION,
    option,
    questionID,
    user
  }
}
