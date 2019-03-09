import openSocket from 'socket.io-client'
import * as API from '../utils/api'
import {
  UPDATE_USER
} from './types'

let socket

export const updateUser = ({ user }) => ({
  type: UPDATE_USER,
  user
})

export const connectUser = ({ name }) => (dispatch) => {
  socket = openSocket(API.url)

  socket.emit('join', {
    ...API.headers,
    name
  })
  socket.on('joined', () => {
    dispatch(updateUser({ user: { loggedIn: true } }))
  })
}

export const disconnectUser = () => (dispatch) => {
  socket.emit('leave', {
    ...API.headers
  })
  socket.on('disconnected', () => {
    dispatch(updateUser({ user: {loggedIn: false} }))
  })
}
