import React, { Component } from 'react'
import '../styles/App.css'
import * as SocketAPI from '../utils/api_socket'
import Login from '../components/Login'

class App extends Component {
  componentDidMount() {
    SocketAPI
      .update()
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

export default App
