import React, { Component } from 'react'
import '../styles/App.css'
import * as SocketAPI from '../utils/api_socket'

class App extends Component {

  componentDidMount() {

    const user = { name: 'Mr World' }

    SocketAPI
      .join(user)

    SocketAPI
      .update()
  }

  render() {
    return (
      <div className="App">
        <p>Hello World!</p>
      </div>
    )
  }
}

export default App
