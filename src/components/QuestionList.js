import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { handleVoteOnQuestion } from '../actions/questions'

class QuestionList extends Component {


  render() {

    const { authedUser ,loading, loggedIn } = this.props

    if (this.props.loggedIn === false) {
      return <Redirect to='/' />
    }

    return (
      <div className='poll-question'>
        This is a question list
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log('state in mapStateToProps', state)

  return {
    state,
    loading: state.authedUser === null,
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(QuestionList)
