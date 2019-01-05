import React from 'react'
import '../styles/LoginForm.css'
import '../styles/buttons.css'

let LoginForm = ({ handleFormSubmit, username }) => {
  return (
    <form
      className='form form--login'
      onSubmit={handleFormSubmit}
    >
      <input type='text'
             ref={username}
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
