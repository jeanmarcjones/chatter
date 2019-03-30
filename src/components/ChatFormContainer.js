import React, { Component } from 'react'
import { connect } from 'react-redux'
import { subscribeToMessages } from '../actions/message'
import ChatForm from './ChatForm'
import { uuid } from '../utils/helpers'
import * as API from '../utils/api'

class ChatFormContainer extends Component {
  componentWillMount() {
    const { props } = this

    props.subscribeToMessages()
  }

  handleFormSubmit = (e) => {
    const { message } = this

    e.preventDefault()
    API.socket.emit('postMessage', {
      message: {
        id: uuid(),
        text: message.value
      }
    })
    message.value = ''
  }

  render() {
    return (
      <ChatForm
        handleFormSubmit={this.handleFormSubmit}
        message={(input) => this.message = input }
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  subscribeToMessages: (data) => dispatch(subscribeToMessages(data))
})

export default connect(
  null,
  mapDispatchToProps
)(ChatFormContainer)
