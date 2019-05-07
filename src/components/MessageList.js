import React from 'react'

const MessageList = ({ messages, messageList }) => {
  return (
    <ul
      ref={messageList}
      className='message-list'
    >
      {
        messages.map((message, i) => (
        <li
          key={i}
          className={`message-list__${message.type}`}
        >
          {`${message.name}: ${message.text}`}
        </li>
      ))}
    </ul>
  )
}

export default MessageList
