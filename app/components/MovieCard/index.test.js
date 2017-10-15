import React from 'react'
import { shallow } from 'enzyme'
import MovieCard from './index'

describe('MovieCard', () => {
  it('should match the snapshot', () => {
    const mockedMovie = {
      title: 'some title of a movie',
      poster: 'url.of.poster',
      overview: 'a movie overview',
      vote_average: 4,
    }
    const renderedMovieCard = shallow(<MovieCard movie={mockedMovie}/>)
    expect(renderedMovieCard).toMatchSnapshot()
  })
})
