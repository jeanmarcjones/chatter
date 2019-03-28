import { messageConstants } from '../constants'

const initialState = {}

export default function message(state = initialState, action) {
  const { message } = action

  switch (action.type) {
    case messageConstants.ADD_MESSAGE :
      return {
        ...state,
        [message.id]: message
      }
    default:
      return state
  }
}
