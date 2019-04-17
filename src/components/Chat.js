import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { disconnectUser } from '../actions/user'
import ChatFormContainer from './ChatFormContainer'
import MessageListContainer from './MessageListContainer'
import '../styles/Container.css'
import '../styles/Buttons.css'

const Chat = ({ user, logOut }) => {
  const handleDisconnect = () => {
    logOut()
  }

  if (user.loggedIn === false)
    return <Redirect to='/login' />

  return (
    <div className='container--flex-column'>
      <MessageListContainer />
      <ChatFormContainer />
      <button className='button button--disconnect' onClick={handleDisconnect}>
        Disconnect
      </button>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  user: user
})

const mapDispatchToProps = () => (dispatch) => ({
  logOut: (data) => (dispatch(disconnectUser(data)))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
