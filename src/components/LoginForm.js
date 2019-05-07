import React from 'react'

const LoginForm = ({ handleFormSubmit, username }) => {
  return (
    <form
      className='form'
      onSubmit={handleFormSubmit}
    >
      <input
        type='text'
        ref={username}
        className='input'
        autoComplete='off'
        required
      />
      <button className='button'>
        Login
      </button>
    </form>
  )
}

export default LoginForm
