/*
 *
 * authenticationReducer
 *
 */

import {
  SET_IS_AUTHENTICATED,
  ATTEMPT_AUTHENTICATION,
} from './constants'

const initialState = Object.assign({})

const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_IS_AUTHENTICATED:
      return Object.assign({}, state, { isAuthenticated: action.isAuthenticated })
    case ATTEMPT_AUTHENTICATION:
      // make api call with action.username and action.password
      // if successful, set isAuthenticated
      // dumb for now, success if password is 'password'
      debugger
      if(action.password === 'password') {
        return Object.assign({}, state, { isAuthenticated: true })
      } else {
        return Object.assign({}, state, { isAuthenticated: false })
      }
    default:
      return state
  }
}

export default authenticationReducer
