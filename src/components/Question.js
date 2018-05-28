import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  handleVote = (e) => {
    e.preventDefault()

    console.log('vote handled!')
    console.log('props are: ',this.props)

    // const { dispatch, tweet, authedUser } = this.props

    // dispatch(handleToggleTweet({
    //   id: tweet.id,
    //   hasLiked: tweet.hasLiked,
    //   authedUser
    // }))
  }

  render() {
    const { questions, question } = this.props

    console.log('questions', questions)

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
            <TiHeartOutline className='tweet-icon'/>}
          </button>
          <span>%</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({questions}, ownProps) {
  console.log('questions in mapStateToProps', questions)

  return {
    questions,
  }
}

export default connect(mapStateToProps)(Question)
