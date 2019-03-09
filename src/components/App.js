import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import '../styles/App.css'
import Login from '../components/Login'
import Chat from '../components/Chat'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            component={Chat}
          />
          <Route
            exact
            path='/login'
            component={Login}
          />
        </Switch>
      </div>
    )
  }
}

export default App
