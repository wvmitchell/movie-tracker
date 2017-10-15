/*
 *
 * Authentication actions
 *
 */

import {
  SET_IS_AUTHENTICATED,
} from './constants'

export const setIsAuthenticated = (isAuthenticated) => ({
  type: SET_IS_AUTHENTICATED,
  isAuthenticated,
})
