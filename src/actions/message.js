import { messageConstants } from '../constants'

export const addMessage = ({ message }) => ({
  type: messageConstants.ADD_MESSAGE,
  message
})

export const subscribeToMessages = () => (dispatch) => {
  dispatch({
    event: 'broadcastMessage',
    handle: message => dispatch({
      type: messageConstants.ADD_MESSAGE,
      message
    })
  })
}

export const subscribeToUpdates = () => (dispatch) => {
  dispatch({
    event: 'update',
    handle: message => dispatch({
      type: messageConstants.ADD_MESSAGE,
      message
    })
  })
}
