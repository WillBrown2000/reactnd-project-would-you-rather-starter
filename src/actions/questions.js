// import { saveLikeToggle, saveTweet } from '../utils/api'
import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const INCREMENT_QUESTION = 'INCREMENT_QUESTION'
export const ADD_QUESTION= 'ADD_QUESTION'
export const VOTE_ON_QUESTION = 'VOTE_ON_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function handleAddQuestion ({optionOneText, optionTwoText, author}) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    console.log('optionOneText: ', optionOneText)

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
  }
}
function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
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
