// Written by Nicholas Major - http://nmajor.com/posts/using-socket-io-with-redux-websocket-redux-middleware

import * as API from '../utils/api';

export default function socketMiddleware() {

  return ({ dispatch }) => next => (action) => {
    if (typeof action === 'function') {
      return next(action);
    }

    const {
      event,
      leave,
      handle,
      ...rest
    } = action;

    if (!event) {
      return next(action);
    }

    if (leave) {
      API.socket.removeListener(event);
    }

    let handleEvent = handle;
    if (typeof handleEvent === 'string') {
      handleEvent = result => dispatch({ type: handle, result, ...rest });
    }
    return API.socket.on(event, handleEvent);
  };
}
