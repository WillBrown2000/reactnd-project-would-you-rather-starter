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
import Login from './Login'
import QuestionList from './QuestionList'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())

  }
  render() {

    console.log('rendering app')
    return (
      <Router>
        <Fragment>
            <div className='container'>
              {this.props.loading === true
                ? null
                : <div>
                    <Route path='/' exact component={Login} />
                    <Route path='/questions/' component={QuestionList} />
                    <Route path='/poll' component={Poll} />
                  </div>}
            </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

 export default connect(mapStateToProps)(App)
