/*
 *
 * Login reducer tests
 *
 */

import loginReducer from '../reducer'
import {
  setUsername,
  setPassword,
  clearFields,
} from '../actions'

describe('loginReducer', () => {
  it('returns the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual({})
  })

  it('returns the state with the username set', () => {
    const expected = {
      username: 'someuser',
    }

    expect(loginReducer(undefined, setUsername('someuser'))).toEqual(expected)
  })

  it('returns the state with the password set', () => {
    const expected = {
      password: 'somepass'
    }

    expect(loginReducer(undefined, setPassword('somepass'))).toEqual(expected)
  })

  it('clears all the fields', () => {
    const expected = {}
    const currentState = {
      username: 'someuser',
      password: 'somepass',
    }

    expect(loginReducer(currentState, clearFields())).toEqual(expected)
  })
})
