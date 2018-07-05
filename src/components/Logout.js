import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser, setLoginStatus} from '../actions/authedUser.js'

class Logout extends Component {

  handleSubmit = (e) => {

    const { dispatch } = this.props

    e.preventDefault()
    dispatch(setAuthedUser('loaded'))
    dispatch(setLoginStatus(false))
  }

  render() {

    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Log Out" />
        </form>
      </div>
    )
  }
}

function mapStateToProps () {

  return {

    loading: false,

  }
}

export default connect(mapStateToProps)(Logout)
