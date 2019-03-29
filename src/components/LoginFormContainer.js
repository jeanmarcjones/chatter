import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import { connectUser } from '../actions/user'

class LoginFormContainer extends Component {
  handleFormSubmit = (e) => {
    const { props, username } = this

    e.preventDefault()
    props.logIn({ name: username.value })
  }

  render() {
    const { props: { user }, handleFormSubmit } = this

    if (user.loggedIn === true)
      return <Redirect to='/' />

    return (
      <LoginForm
        handleFormSubmit={handleFormSubmit}
        username={input => this.username = input}
      />
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user: user
})

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(connectUser(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer)
