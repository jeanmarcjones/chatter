import openSocket from 'socket.io-client'
import * as API from './api'
const socket = openSocket(API.url, {
  reconnection: false
})

export const join = (username, callback) => {
  socket.emit('join', {
    ...API.headers,
    name: username.value
  })
  socket.on('joined', callback)
}

export const leave = () =>
  socket.emit('leave', {
    ...API.headers
  })


export const update = () =>
  socket.on('update', (update) => console.log(update))

export const isConnected = () =>
  socket.connected
