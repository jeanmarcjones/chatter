import React from 'react'
import '../styles/Messages.css'

let MessageList = ({ messages, messageList }) => {
  return (
    <ul
      ref={messageList}
      className='messages'
    >
      {
        messages.map((message, i) => (
        <li
          key={i}
          className={message.type}
        >
          {`${message.name}: ${message.text}`}
        </li>
      ))}
    </ul>
  )
}

export default MessageList
