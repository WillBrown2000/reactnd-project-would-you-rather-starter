import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { Link, withRouter } from 'react-router-dom'
import Question from './Question'

class Poll extends Component {

  render() {

    const { users, questions, authedUser} = this.props

    return (
      <div className='poll'>
        <img
          src=''
          className='avatar'
        />
        <div className='poll-info'>
          <div className='center'>
            <span>Would you rather</span>
            <div>
            <Question question='have bad short-term memory?'/>
            <Question question='have bad long-term memory?'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}) {
  console.log('mapStateToProps from polls ', users)
  console.log('mapStateToProps from polls: authedUser: ', authedUser)

  return {

    users,
    questions,
    authedUser,

  }
}

export default connect(mapStateToProps)(Poll)
