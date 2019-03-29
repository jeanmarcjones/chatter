import React from 'react'
import '../styles/Messages.css'

let MessageList = ({ messages }) => {
  return (
    <ul className='messages'>
      {
        messages.map((message, i) => (
        <li key={i}>
          {`${message.name}: ${message.text}`}
        </li>
      ))}
    </ul>
  )
}

export default MessageList
