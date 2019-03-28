import openSocket from 'socket.io-client'
import * as API from '../utils/api'
import { userConstants } from '../constants'

export const updateUser = ({ user }) => ({
  type: userConstants.UPDATE_USER,
  user
})

export const connectUser = ({ name }) => (dispatch) => {
  socket = openSocket(API.url)

  socket.emit('join', {
    ...API.headers,
    name
  })
  API.socket.on('joined', () => {
    dispatch(updateUser({ user: { loggedIn: true } }))
  })
}

export const disconnectUser = () => (dispatch) => {
  API.socket.emit('leave', {
    ...API.headers
  })
  API.socket.on('disconnected', () => {
    dispatch(updateUser({ user: { loggedIn: false } }))
  })
}
