import {
  UPDATE_USER
} from '../actions/types'

const initialState = {
  loggedIn: false
}

export default function user(state = initialState, action) {
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
