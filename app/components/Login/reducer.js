/*
 *
 * Login reducer
 *
 */

import {
  SET_USERNAME,
  SET_PASSWORD,
  CLEAR_FIELDS,
} from './constants'

const loginReducer = (state = Object.assign({}), action) => {
  switch(action.type) {
    case SET_USERNAME:
      return Object.assign({}, state, { username: action.username })
    case SET_PASSWORD:
      return Object.assign({}, state, { password: action.password })
    case CLEAR_FIELDS:
      return Object.assign({})
    default:
      return state
  }
}

export default loginReducer
