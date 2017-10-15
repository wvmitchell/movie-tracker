import React from 'react'
import { shallow } from 'enzyme'
import Login from './index'

describe('MovieCard', () => {
  it('should match the snapshot', () => {
    const renderedLogin = shallow(<Login />, {disableLifecycleMethods: true})
    expect(renderedLogin).toMatchSnapshot()
  })
})
