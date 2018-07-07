import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleVoteOnQuestion} from '../actions/questions'
import { addVote } from '../actions/users'

class QuestionDetails extends Component {

  getUserSelectedAnswer(question) {
    const {authedUser} = this.props
    if (question.optionOne.votes.indexOf(authedUser) > -1) return 'optionOne'
    if (question.optionTwo.votes.indexOf(authedUser) > -1) return 'optionTwo'

    return null

  }

  handleOptionOneClick = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    const qid = this.props.match.params.question_id
    const answer = 'optionOne'
    const voteInfo = Object.assign({}, {
      'authedUser': authedUser,
      'vote': {}
    })
    voteInfo['vote'][qid] = answer
    dispatch(handleVoteOnQuestion({authedUser, qid, answer}))
    dispatch(addVote(voteInfo))
  }

  handleOptionTwoClick = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    const qid = this.props.match.params.question_id
    const answer = 'optionTwo'
    const voteInfo = Object.assign({}, {
      'authedUser': authedUser,
      'vote': {}
    })
    voteInfo['vote'][qid] = answer
    dispatch(handleVoteOnQuestion({authedUser, qid, answer}))
    dispatch(addVote(voteInfo))
  }

  render() {

    const { loggedIn, authedUser, questions, users } = this.props
    const { question_id } = this.props.match.params

    if (questions[question_id] === undefined) return (
      <div> 404 not found.  Please log in. </div>
    )

    const { author, optionOne, optionTwo, timestamp } = questions[question_id]
    const optionOneVotes = questions[question_id].optionOne.votes.length
    const optionTwoVotes = questions[question_id].optionTwo.votes.length

    if (loggedIn === false || authedUser === null) {
      return <Redirect to='/login' />
    }

    return (
      <div className='poll'>
        <div className='center'> Would You Rather?</div>
        <div className=''>
          <img
            src={users[author].avatarURL}
            alt={`users[author].id`}
            className='avatar '
          />
          <div>
            <div className='poll-question'>
              <div onClick={this.handleOptionOneClick}>{optionOne.text}?</div>
              {(this.getUserSelectedAnswer(questions[question_id]) === 'optionOne'
                ? <div className='user-answer'> You answered  </div>
                : <div></div>
                )}
              <div className='votes'> Votes: {optionOneVotes} </div>
              <div className='percentage'> Percentage: {optionOneVotes/(optionOneVotes + optionTwoVotes) * 100}% </div>
            </div>
            <div className='poll-question'>
              <div onClick={this.handleOptionTwoClick}>{optionTwo.text}?</div>
              {(this.getUserSelectedAnswer(questions[question_id]) === 'optionTwo'
                ? <div className='user-answer'> You answered  </div>
                : <div></div>
                )}
              <div className='votes'> Votes: {optionTwoVotes} </div>
              <div className='percentage'> Percentage: {optionTwoVotes/(optionOneVotes + optionTwoVotes) * 100}% </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions, loggedIn, users}) {

  return {

    authedUser,
    loading: authedUser === null,
    loggedIn,
    questions,
    users,

  }
}

export default connect(mapStateToProps)(QuestionDetails)
