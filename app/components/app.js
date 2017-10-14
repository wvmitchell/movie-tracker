import React, { Component } from 'react';
import MovieIndex from './movieIndex';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MovieIndex />
      </div>
    )
  }
}
