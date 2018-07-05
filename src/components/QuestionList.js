import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Question from './Question'

class QuestionList extends Component {

  render() {

    const { authedUser, loggedIn, questions, questionIds, title } = this.props

    console.log('QuestionList this object', this)

    if (loggedIn === false || authedUser === null) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        <div className='new-question'>{title}</div>
          {
            this.props.questionMapper(questionIds, questions, authedUser).map((id) => (
              <div>
                <Question key={id + '1'} id={id}/>
              </div>
            ))
          }
      </div>
    )
  }
}

function mapStateToProps (state) {

  return {
    authedUser: state.authedUser,
    questionIds: Object.keys(state.questions)
      .sort((a,b) => state.questions[b].timestamp - state.questions[a].timestamp),
    loading: state.authedUser === null,
    loggedIn: state.loggedIn,
    questions: state.questions,
  }
}

export default connect(mapStateToProps)(QuestionList)
