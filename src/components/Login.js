import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginFormContainer from './LoginFormContainer'

const Login = ({ user }) => {
  if (user.loggedIn === true)
    return <Redirect to='/' />

  return (
    <div className='login'>
      <div className='container'>
        <h1 className='login__title'>Chatter</h1>
        <p>Please choose a username.</p>
        <LoginFormContainer />
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  user: user
})

export default connect(
  mapStateToProps
)(Login)
