import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { setAuthedUser, setLoginStatus} from '../actions/authedUser.js'
import { handleVoteOnQuestion } from '../actions/questions'

class Login extends Component {
  state = {
    selectedUser: '',
    loggedIn: false
  }

  componentDidMount() {
    this.setState({selectedUser: ''})
  }

  handleChange = (e) => {
    this.setState({
      selectedUser: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, question, authedUser } = this.props
    dispatch(setAuthedUser(this.state.selectedUser))
    dispatch(setLoginStatus(true))
  }

  render() {

    if (this.props.loggedIn === true) {
      return <Redirect to='/questions' />
    }

    return (

      <div>
        <div>
          <h3>Would You Rather: Sign In</h3>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='poll'>
            <label className='poll-title extra-padding-right'>Username</label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="null">Please select a user...</option>
              <option value='johndoe'>johndoe</option>
              <option value='sarahedo'>sarahedo</option>
              <option value='tylermcginnis' >tylermcginnis</option>
            </select>
          </div>
          <hr />
          <input type="submit" value="Log In" />
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
