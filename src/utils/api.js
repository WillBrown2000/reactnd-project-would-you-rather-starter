import {
  _getQuestions,
  _getUsers,
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
