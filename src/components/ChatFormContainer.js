import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { addMessage, subscribeToMessages, subscribeToUpdates } from '../actions/message'
import ChatForm from './ChatForm'
import { uuid } from '../utils/helpers'
import * as API from '../utils/api'

const ChatFormContainer = ({ name, addMessage, subscribeToUpdates, subscribeToMessages }) => {
  const text = useRef(null)

  useEffect(() => {
    subscribeToMessages()
    subscribeToUpdates()

    text.current.focus()
  })

  const handleFormSubmit = (e) => {
    let message = {
      id: uuid(),
      type: 'message',
      text: text.current.value,
      name
    }

    e.preventDefault()
    API.socket.emit('postMessage', { message: {
      ...message
    }})
    addMessage({ message: {
      ...message
    }})
    text.current.value = ''
  }

  return (
    <ChatForm
      handleFormSubmit={handleFormSubmit}
      message={text}
    />
  )
}

const mapStateToProps = ({ user }) => ({
  name: user.name
})

const mapDispatchToProps = (dispatch) => ({
  addMessage: (data) => dispatch(addMessage(data)),
  subscribeToMessages: (data) => dispatch(subscribeToMessages(data)),
  subscribeToUpdates: (data) => dispatch(subscribeToUpdates(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatFormContainer)
