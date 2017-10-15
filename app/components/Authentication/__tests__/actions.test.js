/*
 *
 * authentication actions tests
 *
 */

import {
  setIsAuthenticated,
} from '../actions'
import {
  SET_IS_AUTHENTICATED,
} from '../constants'

describe('Authentication actions', () => {
  it('has a type of SET_IS_AUTHENTICATED', () => {
    const expected = {
      type: SET_IS_AUTHENTICATED,
      isAuthenticated: true,
    }

    expect(setIsAuthenticated(true)).toEqual(expected)
  })
})
