import { messageConstants } from '../constants'

const initialState = {
  byId: {},
  allIds: []
}

export default function message(state = initialState, action) {
  const { message } = action

  switch (action.type) {
    case messageConstants.ADD_MESSAGE :
      return {
        ...state,
        byId: {
          ...state.byId,
          [message.id]: message
        },
        allIds: [...state.allIds, message.id]
      }
    default:
      return state
  }
}
