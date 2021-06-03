import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR } from '../Types/loginType'

const INITIAL_STATE = {
  login: false,
  loading: false,
  error: false
}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
        loading: false,
        error: false
      }
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export default loginReducer