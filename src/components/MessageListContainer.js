import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import MessageList from './MessageList'

const MessageListContainer = ({ messages }) => {
  const messageList = useRef(null)

  useEffect(() => {
    // keeps message list scrolled to bottom when new elements are added
    messageList.current.scrollTop = messageList.current.scrollHeight
  })

  return (
    <MessageList
      messageList={messageList}
      messages={messages}
    />
  )
}

const mapStateToProps = ({ message }) => ({
  // Converts object to array so we can use map
  messages: message.allIds.map((key) => message.byId[key])
})

export default connect(mapStateToProps)(MessageListContainer)
