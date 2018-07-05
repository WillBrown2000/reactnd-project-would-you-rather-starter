import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleVoteOnQuestion} from '../actions/questions.js'

class QuestionDetails extends Component {
  state = {
    selectedUser: null,
    loggedIn: false
  }

  componentDidMount() {
    this.setState({selectedUser: null})
  }

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
    dispatch(handleVoteOnQuestion({authedUser, qid, answer}))
  }

  handleOptionTwoClick = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    const qid = this.props.match.params.question_id
    const answer = 'optionTwo'
    dispatch(handleVoteOnQuestion({authedUser, qid, answer}))
  }

  render() {
    console.log('params', this.props.match.params)
    console.log('questions in QuestionDetails', questions)
    const { loggedIn, authedUser, questions, users } = this.props
    const { question_id } = this.props.match.params
    const { author, optionOne, optionTwo, timestamp } = questions[question_id]
    const optionOneVotes = questions[question_id].optionOne.votes.length
    const optionTwoVotes = questions[question_id].optionTwo.votes.length

    if (loggedIn === false || authedUser === null) {
      return <Redirect to='/login' />
    }

    console.log('Logged In ', loggedIn)
    console.log('authedUser ', authedUser)
    console.log('questions', users[author])


    return (

      <div className='poll'>
        <div className='center'> Would You Rather?</div>
        <div className='poll-question'>
          <img
            src={users[author].avatarURL}
            alt={`users[author].id`}
            className='avatar '
          />
          <div className='poll-info'>
            <div onClick={this.handleOptionOneClick}>{optionOne.text}?</div>
            {(this.getUserSelectedAnswer(questions[question_id]) === 'optionOne'
              ? <div>  your answer </div>
              : <div></div>
              )}
            <div> Votes: {optionOneVotes} </div>
            <div> Percentage: {optionOneVotes/(optionOneVotes + optionTwoVotes) * 100}% </div>
            <div onClick={this.handleOptionTwoClick}>{optionTwo.text}?</div>
            {(this.getUserSelectedAnswer(questions[question_id]) === 'optionTwo'
              ? <div>  your answer </div>
              : <div></div>
              )}
            <div> Votes: {optionTwoVotes} </div>
            <div> Percentage: {optionTwoVotes/(optionOneVotes + optionTwoVotes) * 100}% </div>

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
