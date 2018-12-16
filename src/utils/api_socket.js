import openSocket from 'socket.io-client'
import * as API from './api'
const socket = openSocket(API.url, {
  reconnection: false
})

export const join = (username, callback) => {
  socket.emit('join', {
    ...API.user,
    name: data.name,
  })
  socket.on('joined', callback)
}

export const update = () =>
  socket.on('update', (update) => console.log(update))

export const isConnected = () =>
  socket.connected
