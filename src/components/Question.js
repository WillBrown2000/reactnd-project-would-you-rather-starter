import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { Link, withRouter } from 'react-router-dom'
import { handleVoteOnQuestion } from '../actions/questions'

class Question extends Component {
  handleVote = (e) => {
    e.preventDefault()

    const { dispatch, question, authedUser } = this.props

    dispatch(handleVoteOnQuestion({
      answer: 'optionOne', //question.answer,
      qid: 'loxhs1bqm25b708cmbf3g', // question.id,
      authedUser: ''
    }))
  }

  render() {
    const { questions, question } = this.props

    console.log('questions in Question.js', questions)

    return (
      <div className='poll-question'>
        <div>
        {question === undefined ?
          'Whoops! It looks like there was no question entered here.':
          question }
        </div>
        <div className='tweet-icons'>
          <TiArrowBackOutline className='tweet-icon' />
          <span>VOTES</span>
          <button className='heart-button' onClick={this.handleVote}>
            <TiHeartOutline className='tweet-icon'/>
          </button>
          <span>%</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log('state in mapStateToProps', state)

  return {
    state,
  }
}

export default connect(mapStateToProps)(Question)
