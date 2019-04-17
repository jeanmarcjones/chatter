import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { connectUser } from '../actions/user'

class LoginFormContainer extends Component {
  componentDidMount() {
    this.username.focus()
  }

  handleFormSubmit = (e) => {
    const { props, username } = this

    e.preventDefault()
    props.logIn({ name: username.value })
  }

  render() {
    const { handleFormSubmit } = this

    return (
      <LoginForm
        handleFormSubmit={handleFormSubmit}
        username={input => this.username = input}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(connectUser(data))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginFormContainer)
