import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/buttons.css'
import * as SocketAPI from '../utils/api_socket'

class Chat extends Component {
  state = {
    toLogin: false
  }

  handleDisconnect = () => {
    SocketAPI
      .leave(() => this.setState(() => ({
        toLogin: true
      })))
  }

  render() {
    if (SocketAPI.isConnected() === false || this.state.toLogin === true)
      return <Redirect to='/login' />

    return (
      <div>
        <p>Hello Chatter!</p>
        <button className='button' onClick={this.handleDisconnect}>Disconnect</button>
      </div>
    )
  }
}

export default Chat
