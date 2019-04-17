import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { connectUser } from '../actions/user'

const LoginFormContainer = ({ logIn }) => {
  const text = useRef(null)

  useEffect(() => {
    text.current.focus()
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    logIn({ name: text.current.value })
  }

  return (
    <LoginForm
      handleFormSubmit={handleFormSubmit}
      username={text}
    />
  )
}

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(connectUser(data))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginFormContainer)
