import openSocket from 'socket.io-client'
import * as API from './api'
const socket = openSocket(API.url)

export const join = (data) =>
  socket.emit('join', {
    ...API.user,
    name: data.name,
  })
