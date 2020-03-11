import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Exercises from '../Exercises/Exercises'
import Exercise from '../Exercise/Exercise'
import ExerciseEdit from '../ExerciseEdit/ExerciseEdit'
import ExerciseCreate from '../ExerciseCreate/ExerciseCreate'
import Randomizer from '../Randomizer/Randomizer'
import Workouts from '../Workouts/Workouts'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/exercises' render={() => (
            <Exercises msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/exercises/:id' render={({ match }) => (
            <Exercise msgAlert={this.msgAlert} user={user} match={match} />
          )} />
          <AuthenticatedRoute user={user} exact path='/exercises/:id/edit' render={({ match }) => (
            <ExerciseEdit msgAlert={this.msgAlert} user={user} match={match} />
          )} />
          <AuthenticatedRoute user={user} exact path='/exercises-create' render={() => (
            <ExerciseCreate msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/randomize' render={({ match }) => (
            <Randomizer msgAlert={this.msgAlert} user={user} match={match} />
          )} />
          <AuthenticatedRoute user={user} exact path='/workouts' render={() => (
            <Workouts msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
