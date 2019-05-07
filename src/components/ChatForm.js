import React from 'react'

const ChatForm = ({ handleFormSubmit, message }) => {
  return (
    <form
      className='form send-message'
      onSubmit={handleFormSubmit}
    >
      <input
        type='text'
        ref={message}
        className='input'
        autoComplete='off'
        required
      />
      <button className='button'>
        Send Message
      </button>
    </form>
  )
}

export default ChatForm
