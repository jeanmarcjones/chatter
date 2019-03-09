import {
  UPDATE_USER
} from '../actions/types'

export default function user(state, action) {
  const { user } = action

  switch (action.type) {
    case UPDATE_USER :
      return {
        ...state,
        ...user
      }
    default :
      return state
  }
}
