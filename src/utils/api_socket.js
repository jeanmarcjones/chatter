import openSocket from 'socket.io-client'
import * as API from './api'
const socket = openSocket(API.url, {
  reconnection: false
})

export const join = (data) =>
  socket.emit('join', {
    ...API.user,
    name: data.name,
  })

export const update = () =>
  socket.on('update', (update) => console.log(update))

export const isConnected = () =>
  socket.connected
