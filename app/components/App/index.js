import React, { Component } from 'react';
import MovieIndex from '../MovieIndex';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class App extends Component {
  render = () => (
    <MuiThemeProvider>
      <MovieIndex />
    </MuiThemeProvider>
  )
}
