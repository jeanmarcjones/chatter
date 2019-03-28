import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions/message'
import ChatForm from './ChatForm'
import { uuid } from '../utils/helpers'

class ChatFormContainer extends Component {
  handleFormSubmit = (e) => {
    const { props, message } = this

    e.preventDefault()
    props.sendMessage({
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
  sendMessage: (data) => dispatch(sendMessage(data))
})

export default connect(
  null,
  mapDispatchToProps
)(ChatFormContainer)
