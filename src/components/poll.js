import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {

  render() {

    return (
      <div className='poll'>
        <img
          src=''
          className='avatar'
          alt='pic'
        />
        <div className='poll-info'>
          <div className='center'>
            <span>Would you rather</span>
            <div>
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
