import React from 'react'
import LoginFormContainer from './LoginFormContainer'
import '../styles/Login.css'
import '../styles/Container.css'

let Login = () => {
  return (
    <div className='login container--full-screen'>
      <h1>Chatter</h1>
      <p>Please choose a username.</p>
      <LoginFormContainer />
    </div>
  )
}

export default Login
