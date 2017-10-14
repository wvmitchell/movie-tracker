import React from 'react'
import { shallow } from 'enzyme'
import MovieIndex from '../movieIndex'
import { sleep } from '../../../utils'

describe('MovieIndex', () => {
  it('should match the snapshot', () => {
    const renderedMovieIndex = shallow(<MovieIndex />)
    expect(renderedMovieIndex).toMatchSnapshot()
  })
})
