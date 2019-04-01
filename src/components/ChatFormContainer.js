import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage, subscribeToMessages } from '../actions/message'
import ChatForm from './ChatForm'
import { uuid } from '../utils/helpers'
import * as API from '../utils/api'

class ChatFormContainer extends Component {
  componentWillMount() {
    this.props.subscribeToMessages()
  }

  componentDidMount() {
    this.message.focus()
  }

  handleFormSubmit = (e) => {
    const { message, props: { name, addMessage } } = this
    let data = {
      id: uuid(),
      text: message.value,
      name
    }

    e.preventDefault()
    API.socket.emit('postMessage', {
      message: {
        ...data
      }
    })
    addMessage({ message: {
        ...data
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

const mapStateToProps = ({ user }) => ({
  name: user.name
})

const mapDispatchToProps = (dispatch) => ({
  addMessage: (data) => dispatch(addMessage(data)),
  subscribeToMessages: (data) => dispatch(subscribeToMessages(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatFormContainer)
