import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/Login'
import Chat from '../components/Chat'

const ChatterApp = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={Chat}
      />
      <Route
        exact
        path='/login'
        component={Login}
      />
    </Switch>
  )
}

export default ChatterApp
