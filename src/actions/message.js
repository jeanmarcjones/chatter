import { messageConstants } from '../constants'

export const addMessage = ({ message }) => ({
  type: messageConstants.ADD_MESSAGE,
  message
})
