import React from 'react'
import '../styles/LoginForm.css'
import '../styles/Buttons.css'

let LoginForm = ({ handleFormSubmit, username }) => {
  return (
    <form
      className='form--login'
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
