import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { disconnectUser } from '../actions/user'
import '../styles/buttons.css'

let Chat = ({ user, logOut }) => {
  const handleDisconnect = () => {
    logOut()
  }

    if (user.loggedIn === false)
      return <Redirect to='/login' />

    return (
      <div>
        <p>Hello Chatter!</p>
        <button className='button' onClick={handleDisconnect}>
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
