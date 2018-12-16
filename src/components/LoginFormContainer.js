import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import * as SocketAPI from '../utils/api_socket'
import LoginForm from "./LoginForm"

class LoginFormContainer extends Component {
  state = {
    toChat: false
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    SocketAPI
      .join({
        name: this.username.value
      }, () => this.setState(() => ({
        toChat: true
      })))
  }

  render() {
    if (this.state.toChat === true)
      return <Redirect to='/' />

    return (
      <LoginForm
        handleFormSubmit={this.handleFormSubmit}
        username={input => this.username = input}
      />
    )
  }
}

export default LoginFormContainer
