import { combineReducers } from 'redux'
import authenticationReducer from './components/Authentication/reducer'
import loginReducer from './components/Login/reducer'

const initialState = Object.assign({})
const defaultReducer = (state = initialState, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}

const rootReducer = combineReducers({
  defaultState: defaultReducer,
  authentication: authenticationReducer,
  login: loginReducer,
})

export default rootReducer
