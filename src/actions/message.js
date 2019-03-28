import * as API from '../utils/api'
import { messageConstants } from '../constants'

export const addMessage = ({ message }) => ({
  type: messageConstants.ADD_MESSAGE,
  message
})

export const sendMessage = ({ message }) => (dispatch) => {
  API.socket.emit('message', message)
  API.socket.on('message', (message) => {
    dispatch(addMessage({
      message
    }))
  })
}
