import React from 'react'
import Paper from 'material-ui/Paper'
import './styles.scss'

const MovieCard = ({movie}) => {
  const baseImagePath = 'https://image.tmdb.org/t/p/'
  const width = 'w154'

  return (
    <Paper className='MovieCard'>
      <img src={`${baseImagePath}${width}${movie.poster_path}`} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Vote Average: {movie.vote_average}/10</p>
    </Paper>
  )
}

export default MovieCard
