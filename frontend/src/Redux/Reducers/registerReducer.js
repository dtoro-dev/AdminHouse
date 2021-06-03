import { REGISTER_SUCCESS, REGISTER_LOADING, REGISTER_ERROR } from '../Types/registerType'

const INITIAL_STATE = {
  register: false,
  loading: false,
  error: false
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: action.payload,
        loading: false,
        error: false
      }
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export default registerReducer