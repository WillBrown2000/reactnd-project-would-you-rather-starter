import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion, handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class CreatePoll extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  handleChange1 = (e) => {
    const optionOneText = e.target.value

    console.log('from handlechange,', optionOneText)

    this.setState(() => ({
      optionOneText
    }))
  }
  handleChange2 = (e) => {
    const optionTwoText = e.target.value

    console.log('from handlechange,', optionTwoText)

    this.setState(() => ({
      optionTwoText
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    const { optionOneText, optionTwoText } = this.state



    dispatch(handleAddQuestion({optionOneText: optionOneText, optionTwoText: optionTwoText, author: authedUser}))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: ''
    }))
  }

  render() {

    const { loggedIn, authedUser, optionOneText, optionTwoText } = this.props

    if (loggedIn === false || authedUser === null) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        <h3 className='center'>Make New Questions</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Question One"
            value={optionOneText}
            onChange={this.handleChange1}
            className='textarea'
            maxLength={500}
          />
          <textarea
            placeholder="Question Two"
            value={optionTwoText}
            onChange={this.handleChange2}
            className='textarea'
            maxLength={500}
          />
          <button
            className='btn'
            type='submit'
            disabled={optionOneText === undefined || optionTwoText === undefined || optionOneText.length < 1 || optionTwoText.length < 1}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {

  return {
    authedUser: state.authedUser,
    loggedIn: state.loggedIn,
  }
}

export default connect(mapStateToProps)(CreatePoll)
