/*
 *
 * authentication actions tests
 *
 */

import {
  setIsAuthenticated,
  attemptAuthentication,
} from '../actions'
import {
  SET_IS_AUTHENTICATED,
  ATTEMPT_AUTHENTICATION,
} from '../constants'

describe('Authentication actions', () => {
  it('has a type of SET_IS_AUTHENTICATED', () => {
    const expected = {
      type: SET_IS_AUTHENTICATED,
      isAuthenticated: true,
    }
    expect(setIsAuthenticated(true)).toEqual(expected)
  })

  it('has a type of ATTEMPT_AUTHENTICATION', () => {
    const expected = {
      type: ATTEMPT_AUTHENTICATION,
      username: 'someuser',
      password: 'somepass',
    }
    expect(attemptAuthentication('someuser', 'somepass')).toEqual(expected)
  })
})
