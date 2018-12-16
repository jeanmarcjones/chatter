import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import '../styles/App.css'
import * as SocketAPI from '../utils/api_socket'
import Login from '../components/Login'
import Chat from '../components/Chat'

class App extends Component {
  componentDidMount() {
    SocketAPI
      .update()
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (<Chat />)}
          />
          <Route
            exact
            path='/login'
            render={() => (<Login />)}
          />
        </Switch>
      </div>
    )
  }
}

export default App
