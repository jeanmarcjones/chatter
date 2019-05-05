import React from 'react'

const ChatForm = ({ handleFormSubmit, message }) => {
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
