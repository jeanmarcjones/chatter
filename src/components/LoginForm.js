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
      <input type='submit'
             value='Submit'
             className='button'
      />
    </form>
  )
}

export default LoginForm
