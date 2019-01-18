import openSocket from 'socket.io-client'
import * as API from './api'
const socket = openSocket(API.url)

export const join = (username, callback) => {
  socket.emit('join', {
    ...API.headers,
    name: username.value
  })
  socket.on('joined', callback)
}

export const leave = (callback) => {
  socket.emit('leave', {
    ...API.headers
  })
  socket.on('disconnected', callback)
}

export const update = () =>
  socket.on('update', (update) => console.log(update))

export const isConnected = () =>
  socket.connected
