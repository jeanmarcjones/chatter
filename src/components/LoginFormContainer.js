import React, { Component } from 'react'
import * as SocketAPI from '../utils/api_socket'
import LoginForm from "./LoginForm"

class LoginFormContainer extends Component {
  handleFormSubmit = (e) => {
    e.preventDefault()
    SocketAPI
      .join({
        name: this.username.value
      })
  }

  render() {
    return (
      <LoginForm
        handleFormSubmit={this.handleFormSubmit}
        username={input => this.username = input}
      />
    )
  }
}

export default LoginFormContainer
