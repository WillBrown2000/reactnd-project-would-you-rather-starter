import {
  _getQuestions,
  _getUsers,
  _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getQuestions(),
    _getUsers(),
  ]).then(([questions, users]) => {
    console.log('questions from get initialdata', questions)
    return {
      questions,
      users,
    }
  })
}

export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer (info)
}
