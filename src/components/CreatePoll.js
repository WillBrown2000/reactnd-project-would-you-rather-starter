import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion, handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class CreatePoll extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
    submitted: false,
  }

  handleChange1 = (e) => {
    const optionOneText = e.target.value

    console.log('from handlechange,', this.state.optionOneText)

    this.setState(() => ({
      optionOneText
    }))
  }
  handleChange2 = (e) => {
    const optionTwoText = e.target.value

    console.log('from handlechange,', this.state.optionTwoText)

    this.setState(() => ({
      optionTwoText
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    const { optionOneText, optionTwoText } = this.state

    console.log('click')

    dispatch(handleAddQuestion({optionOneText: optionOneText, optionTwoText: optionTwoText, author: authedUser}))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      submitted: true,
    }))
  }

  render() {

    const { loggedIn, authedUser } = this.props
    const { optionOneText, optionTwoText } = this.state

    if (loggedIn === false || authedUser === null) {
      return <Redirect to='/login' />
    }

    if (this.state.submitted === true) {
      return <Redirect to='/unanswered-questions' />
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
            disabled={optionOneText === undefined || optionTwoText === undefined || optionOneText.length === 0 || optionTwoText.length === 0}>
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
