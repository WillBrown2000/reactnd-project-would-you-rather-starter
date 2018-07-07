import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Leaderboard extends Component {

  render() {

    const { loggedIn, authedUser, users, sortedUsers } = this.props

    console.log('users: ', users)
    console.log('sorted users: ', sortedUsers)

    if (loggedIn === false || authedUser === null) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        {sortedUsers.map( (user) => (
        <div>
          <div> user: {users[user].name}</div>
          <img
            src={users[user].avatarURL}
            alt={`user.id`}
            className='avatar '
          />
          <div> Questions Asked: {users[user].questions.length}</div>
          <div> Questions Answered: {Object.keys(users[user].answers).length }</div>
        </div>

        ))}
      </div>
    )
  }
}

function mapStateToProps ({questions, authedUser, loggedIn, users}) {

  return {
    users,
    questions,
    sortedUsers: Object.keys(users).sort( (a,b) => (users[b].questions.length + Object.keys(users[b].answers).length) - (users[a].questions.length + Object.keys(users[a].answers).length)),
    authedUser,
    loggedIn,
  }
}

export default connect(mapStateToProps)(Leaderboard)
