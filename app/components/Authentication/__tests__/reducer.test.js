/*
 *
 * authenticationReducer tests
 *
 */

import authenticationReducer from '../reducer'
import {
  setIsAuthenticated,
  attemptAuthentication,
} from '../actions'

describe('authenticationReducer', () => {
  it('returns the initial state', () => {
    expect(authenticationReducer(undefined, {})).toEqual({})
  })

  it('sets isAuthenticated to true', () => {
    const expected = Object.assign({
      isAuthenticated: true
    })
    expect(authenticationReducer(undefined, setIsAuthenticated(true))).toEqual(expected)
  })

  it('sets isAuthenticated to false', () => {
    const expected = Object.assign({
      isAuthenticated: false
    })
    expect(authenticationReducer(undefined, setIsAuthenticated(false))).toEqual(expected)
  })

  it('authenticates the user', () => {
    const expected = Object.assign({
      isAuthenticated: false
    })
    expect(authenticationReducer(undefined, attemptAuthentication('someuser', 'somepass'))).toEqual(expected)
  })
})
