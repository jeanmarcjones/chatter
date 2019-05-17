import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'
import store from './store'
import ChatterApp from './components/ChatterApp'
import './styles/styles.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ChatterApp />
    </Router>
  </Provider>,
  document.getElementById('root')
)
