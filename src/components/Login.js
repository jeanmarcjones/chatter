import React from 'react'
import '../styles/Login.css'
import LoginFormContainer from './LoginFormContainer'

let Login = () => {
  return (
    <div>
      <h1>Chatter</h1>
      <p>Please choose a username.</p>
      <LoginFormContainer />
    </div>
  )
}

export default Login
