import { combineReducers } from 'redux'
import authenticationReducer from './components/Authentication/reducer'

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
})

export default rootReducer
