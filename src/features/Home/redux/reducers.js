import {GET_LIST_STYLE, GET_LIST_STYLE_SUCCESS, GET_LIST_STYLE_FAIL} from './types'

const INIT_STATE = {
  listStyle: [],
  loading: false,
}

const GlobalsReducer = (state = INIT_STATE, action) => {
  const {type, payload} = action
  switch (type) {
    case GET_LIST_STYLE:
    case GET_LIST_STYLE_SUCCESS:
    case GET_LIST_STYLE_FAIL:
      return {...state}

    default:
      return state
  }
}

export default GlobalsReducer
