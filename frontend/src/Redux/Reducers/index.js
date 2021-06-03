import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import sectionReducer from './sectionReducer'

export default combineReducers({
  loginReducer,
  registerReducer,
  sectionReducer
})