import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// import Dashboard from './Dashboard'
// import LoadingBar from 'react-redux-loading'
// import NewTweet from './NewTweet'
// import TweetPage from './TweetPage'
// import Nav from './Nav'

import { handleInitialData } from '../actions/shared'
import Poll from './Poll'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Poll />
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

 export default connect(mapStateToProps)(App)
