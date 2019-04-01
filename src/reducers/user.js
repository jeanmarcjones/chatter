import { userConstants } from '../constants'

const initialState = {
  loggedIn: false,
  name: ''
}

export default function user(state = initialState, action) {
  const { user } = action

  switch (action.type) {
    case userConstants.UPDATE_USER :
      return {
        ...state,
        ...user
      }
    default :
      return state
  }
}
