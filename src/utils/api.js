const url = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:3001'

const headers = {
  Accept: "application/json",
}

export const post = (data) =>
  fetch(`${url}/post`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res)