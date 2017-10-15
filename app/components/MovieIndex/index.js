import React, { Component } from 'react'
import _ from 'lodash'
import MovieCard from '../MovieCard'
import MoviesApi from '../../apis/moviesapi.js'
import { moviedbAPIKey } from '../../keys'

class MovieIndex extends Component {
  constructor() {
    super();
    this.moviesApi = new MoviesApi(moviedbAPIKey)

    this.state = {
      nowPlaying: [],
    }
  }

  componentDidMount = async () => { 
    const nowPlaying = await this.moviesApi.fetchNowPlaying()
    this.setState({ nowPlaying })
  }

  renderMovieCards = (movies) => (
    _.map(movies, (movie, index) => <MovieCard movie={movie} key={index} />)
  )

  render = () => (
    <div>
      { this.renderMovieCards(this.state.nowPlaying) }
    </div>
  )
}

export default MovieIndex
