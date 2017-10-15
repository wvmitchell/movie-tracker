/*
 *
 * Login action creators
 *
 */

import {
  SET_USERNAME,
  SET_PASSWORD,
  CLEAR_FIELDS,
} from './constants'

export const setUsername = (username) => ({
  type: SET_USERNAME,
  username,
})

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  password,
})

export const clearFields = () => ({
  type: CLEAR_FIELDS,
})
