# Chatter

A chat room app created with React and Socket.io. Users can select a user name then login to the chat room. Once 
connected they can send messages which can be viewed by the connected users.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Getting Started

To view the project you must:

* Start the server (see Server section)
* Install all project dependencies with `yarn install`
* Start the development server with `yarn start`

You may use `npm` instead of `yarn` to install dependencies and start the development server.

### Server

You will need to run a local node server for this app to work, it can be downloaded from here 
[Chatter Sever](https://github.com/jeanmarcjones/chatter-server).

### TODO

- [x] Add socket.io middleware
- [ ] Use prop types
- [x] Move store to separate file
- [x] Reduce unused divs
- [ ] Input partial
- [x] Keep message window scrolled to bottom
- [ ] Create mobile views and app
