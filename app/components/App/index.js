import React, { Component } from 'react'
import { Route } from 'react-router'
import MovieIndex from '../MovieIndex'
import Login from '../Login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class App extends Component {
  render = () => (
    <MuiThemeProvider>
      <div>
        <Route exact path='/' component={MovieIndex} />
        <Route exact path='/login' component={Login} />
      </div>
    </MuiThemeProvider>
  )
}
