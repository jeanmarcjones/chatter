import io from 'socket.io-client'

const url = process.env.SOCKET_API_URL || 'http://localhost:3001'
const options = {
  'reconnectionAttempts': 5
}

export let socket = io.connect(url, options)

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  id: token
}

// Reconnects client to server
export const reconnect = () => {
  socket = io.connect(url, options)
}
