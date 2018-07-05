import { VOTE_ON_QUESTION, RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions'


export default function questions (state = {}, action) {
  switch(action.type) {
    case VOTE_ON_QUESTION :

      const { answer, qid, authedUser } = action
      const notAnswer = answer === 'optionOne' ? 'optionTwo' : 'optionOne'
      let newQuestionState = {}

      if (state[qid][answer].votes.indexOf(authedUser) > -1) return { ...state } //user already voted for this
      if (state[qid][notAnswer].votes.indexOf(authedUser) > -1) {

        newQuestionState = {
          [qid] : {
               ...state[qid],
               [answer]: {
                 ...state[qid][answer],
                 votes: state[qid][answer].votes.concat(authedUser)
               },
               [notAnswer]: {
                 ...state[qid][notAnswer],
                 votes: state[qid][notAnswer].votes.filter( (voter) =>  voter !== authedUser )
               }
          }
        }

      }
        else {

          newQuestionState = {
            [qid] : {
                 ...state[qid],
                 [answer]: {
                   ...state[qid][answer],
                   votes: state[qid][answer].votes.concat(authedUser)
                 }
            }
          }
        }

      return {
        ...state,
        ...newQuestionState,
      }

    case RECEIVE_QUESTIONS :

      return {
        ...state,
        ...action.questions,
      }

    case ADD_QUESTION :

      return {
        ...state,
        [action.question.id]: action.question,
      }

    default :
      return {...state}
  }
}
