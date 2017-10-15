import React from 'react'
import { shallow } from 'enzyme'
import App from './index'

describe('MovieCard', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true})
    expect(renderedApp).toMatchSnapshot()
  })
})
