import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { Link, withRouter } from 'react-router-dom'
import Question from './Question'

class Poll extends Component {
  // handleLike = (e) => {
  //   e.preventDefault()
  //
  //   const { dispatch, tweet, authedUser } = this.props
  //
  //   dispatch(handleToggleTweet({
  //     id: tweet.id,
  //     hasLiked: tweet.hasLiked,
  //     authedUser
  //   }))
  // }
  // toParent = (e, id) => {
  //   e.preventDefault()
  //   this.props.history.push(`/tweet/${id}`)
  // }
  render() {
    // const { tweet } = this.props
    //
    // if (tweet === null) {
    //   return <p>This Tweet doesnt existd</p>
    // }
    //
    // const {
    //   name, avatar, timestamp, text, hasLiked, likes, replies, id, parent
    // } = tweet

    return (
      <div className='poll'>
        <img
          // src={avatar}
          // alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='poll-info'>
          <div className='center'>
            <span>Would you rather</span>
            <div>
            <Question question='have bad short-term memory?'/>
            <Question question='have bad long-term memory?'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// function mapStateToProps ({authedUser, users, tweets}, { id }) {
//   const tweet = tweets[id]
//   const parentTweet = tweet ? tweets[tweet.replyingTo] : null
//
//   return {
//     authedUser,
//     tweet: tweet
//       ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
//       : null
//   }
// }

export default Poll
