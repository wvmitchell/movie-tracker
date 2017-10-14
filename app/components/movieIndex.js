import React, { Component } from 'react'
import MoviesApi from '../apis/moviesapi.js'
import moviedbAPIKey from '../../keys'

export default class MovieIndex extends Component {
  constructor() {
    super();
    this.moviesApi = new MoviesApi(moviedbAPIKey)

    this.state = {
      latestMovies: [],
    }
  }

  componentDidMount = async () => { 
    const movies = await this.moviesApi.fetchLatestMovies()
    debugger
  }

  render() {
    return (
      <div>
      MOVIES
      </div>
    )
  }
}
