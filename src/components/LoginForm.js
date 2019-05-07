import React from 'react'

const LoginForm = ({ handleFormSubmit, username }) => {
  return (
    <form
      className='login__form'
      onSubmit={handleFormSubmit}
    >
      <input
        type='text'
        ref={username}
        className='login__input'
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
