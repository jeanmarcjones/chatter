import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../styles/buttons.css'
import * as SocketAPI from '../utils/api_socket'

class Chat extends Component {
  render() {
    if (SocketAPI.isConnected() === false)
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
