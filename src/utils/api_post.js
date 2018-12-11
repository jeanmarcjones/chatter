import * as API from './api'

export const post = (data) =>
  fetch(`${API.url}/post`, {
    method: 'POST',
    headers: {
      ...API.headers,
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res)
