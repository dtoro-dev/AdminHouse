import { SECTION_SUCCESS, SECTION_LOADING, SECTION_ERROR } from '../Types/sectionType'

const INITIAL_STATE = {
  section: false,
  loading: false,
  error: false
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SECTION_SUCCESS:
      return {
        ...state,
        section: action.payload,
        loading: false,
        error: false
      }
    case SECTION_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case SECTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export default registerReducer