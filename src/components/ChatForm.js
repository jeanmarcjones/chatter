import React from 'react'
import '../styles/ChatForm.css'
import '../styles/buttons.css'

let ChatForm = ({ handleFormSubmit, message }) => {
  return (
    <form
      className='form--chat'
      onSubmit={handleFormSubmit}
    >
      <input
        type='text'
        ref={message}
        autoComplete='off'
        required
      />
      <input
        type='submit'
        value='submit'
        className='button'
      />
    </form>
  )
}

export default ChatForm
