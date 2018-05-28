import {
  _getQuestions,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getQuestions(),
  ]).then((questions) => {
    console.log('questions from get initialdata', questions)
    return questions
  })
}
