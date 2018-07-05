import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser, setLoginStatus} from '../actions/authedUser.js'

class Login extends Component {
  state = {
    selectedUser: null,
    loggedIn: false
  }

  componentDidMount() {
    this.setState({selectedUser: null})
  }

  handleChange = (e) => {
    this.setState({
      selectedUser: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.selectedUser))
    dispatch(setLoginStatus(true))
  }

  render() {



    if (this.props.loggedIn === true) {
      return <Redirect to='/unanswered-questions' />
    }

    return (

      <div>
        <div>
          <h3>Would You Rather: Sign In</h3>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='poll'>
            <label className='poll-title extra-padding-right'>Username</label>
            <select value={this.state.value} defaultValue='Please select a user...' onChange={this.handleChange}>
              <option value={null} disabled>Please select a user...</option>
              <option value='johndoe'>johndoe</option>
              <option value='sarahedo'>sarahedo</option>
              <option value='tylermcginnis' >tylermcginnis</option>
            </select>
          </div>
          <hr />
          <input type="submit" value="Log In" disabled={this.state.selectedUser===null} />
        </form>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions, loggedIn}) {

  return {

    authedUser,
    loading: authedUser === null,
    loggedIn,

  }
}

export default connect(mapStateToProps)(Login)
