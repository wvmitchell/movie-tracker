/*
 *
 * Login actions tests
 *
 */

import {
  setUsername,
  setPassword,
  clearFields,
} from '../actions'
import {
  SET_USERNAME,
  SET_PASSWORD,
  CLEAR_FIELDS,
} from '../constants'

describe('Login actions', () => {
  it('has a type of SET_USERNAME', () => {
    const expected = {
      type: SET_USERNAME,
      username: 'somename',
    }
    expect(setUsername('somename')).toEqual(expected)
  })

  it('has a type of SET_PASSWORD', () => {
    const expected = {
      type: SET_PASSWORD,
      password: 'somepassword',
    }
    expect(setPassword('somepassword')).toEqual(expected)
  })

  it('has a type of CLEAR_FIELDS', () => {
    const expected = {
      type: CLEAR_FIELDS,
    }
    expect(clearFields()).toEqual(expected)
  })
})
