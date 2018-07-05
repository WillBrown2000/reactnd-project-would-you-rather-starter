import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Question extends Component {

  state = {
    clicked: 'false',
  }

  handleClick = () => {

    this.setState({
      clicked: true
    })
  }

  render() {
    const { id , questions } = this.props
    const { author, optionOne, optionTwo, timestamp } = questions[id]
    const { clicked } = this.state

    return (
      <div>
        {(clicked === true) ? <Redirect to={'/question/' + id} /> : <div></div>}
        <div onClick={this.handleClick} className='poll' id='extra-padding'> Written by {author}
          <div className='poll-question'>
            <li>Question one: {optionOne.text}</li>
            <li>Question two: {optionTwo.text}</li>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {

  return {
    state,
    questions: state.questions,
    authedUser: state.authedUser,
  }
}

export default connect(mapStateToProps)(Question)
