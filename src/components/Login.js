import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginFormContainer from './LoginFormContainer'
import '../styles/Login.css'
import '../styles/Container.css'

const Login = ({ user }) => {
  if (user.loggedIn === true)
    return <Redirect to='/' />

  return (
    <div className='login container--full-screen'>
      <h1>Chatter</h1>
      <p>Please choose a username.</p>
      <LoginFormContainer />
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  user: user
})

export default connect(
  mapStateToProps
)(Login)
