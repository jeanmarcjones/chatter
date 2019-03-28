import openSocket from 'socket.io-client'

export const url = process.env.SOCKET_API_URL || 'http://localhost:3001'

export const connect = () => openSocket(url)

export let socket = connect()

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  id: token
}
