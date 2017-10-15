/*
 *
 * Authentication actions
 *
 */

import {
  SET_IS_AUTHENTICATED,
  ATTEMPT_AUTHENTICATION,
} from './constants'

export const setIsAuthenticated = (isAuthenticated) => ({
  type: SET_IS_AUTHENTICATED,
  isAuthenticated,
})

export const attemptAuthentication = (username, password) => ({
  type: ATTEMPT_AUTHENTICATION,
  username,
  password,
})
