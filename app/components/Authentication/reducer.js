/*
 *
 * authenticationReducer
 *
 */

import {
  SET_IS_AUTHENTICATED,
} from './constants'

const initialState = Object.assign({})

const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_IS_AUTHENTICATED:
      return Object.assign(state, { isAuthenticated: action.isAuthenticated })
    default:
      return state
  }
}

export default authenticationReducer
