import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import QuestionList from './QuestionList'
import Logout from './Logout'
import CreatePoll from './CreatePoll'
import QuestionDetails from './QuestionDetails'
import Leaderboard from './Leaderboard'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  isQuestionAnswered = (optionOne, optionTwo) => {
    const { authedUser } = this.props
    return (optionOne.votes.indexOf(authedUser) > -1 || optionTwo.votes.indexOf(authedUser) > -1)
  }

  mapToUnanswered = (questionIds, questions, authedUser) => (
    questionIds.map( (questionId) => {
      if (questions[questionId].optionOne.votes.indexOf(authedUser) === -1 &&
      questions[questionId].optionTwo.votes.indexOf(authedUser) === -1  ) return questionId
        else return
    }).filter( (e) => e != undefined)
  )

  mapToAnswered = (questionIds, questions, authedUser) => (
    questionIds.map( (questionId) => {
      if (questions[questionId].optionOne.votes.indexOf(authedUser) > -1 ||
      questions[questionId].optionTwo.votes.indexOf(authedUser) > -1  ) return questionId
        else return
    }).filter( (e) => e != undefined)
  )

  render() {

    console.log('this object', this)
    return (
      <Router>
            <div>
              <h1>Would you rather?</h1>
              {(this.props.authedUser === undefined || this.props.authedUser === null || this.props.authedUser === 'loaded') ? <div></div> : <div>Welcome back, {this.props.authedUser}</div> }
              <ul>
                <li><NavLink to='/'>Login</NavLink></li>
                <li><NavLink to='/unanswered-questions'>Unanswered Questions</NavLink></li>
                <li><NavLink to='/answered-questions'>Answered Questions</NavLink></li>
                <li><NavLink to='/add'>Create Questions</NavLink></li>
                <li><NavLink to='/leaderboard'>Leaderboard</NavLink></li>
              </ul>
              {(this.props.authedUser === undefined || this.props.authedUser === null || this.props.authedUser === 'loaded') ? <div></div> : <Logout /> }
              {this.props.loading === true
                ? <div>loading</div>
                :
                    <div>
                        <Route path='/' exact component={Login} />
                        <Route path='/unanswered-questions/' render={()=><QuestionList title={'Unanswered Questions'} questionMapper={this.mapToUnanswered}/>} />
                        <Route path='/answered-questions' render={()=><QuestionList title={'Answered Questions'} questionMapper={this.mapToAnswered}/>} />
                        <Route path='/login' component={Login} />
                        <Route path='/add' component={CreatePoll} />
                        <Route path='/question/:question_id' component={QuestionDetails} />
                        <Route path='/leaderboard' component={Leaderboard} />
                    </div>

                }
            </div>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser,
  }
}

 export default connect(mapStateToProps)(App)
