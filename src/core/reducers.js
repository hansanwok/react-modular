import {combineReducers} from 'redux'

import Home from 'features/Home/redux/reducers'

const appReducer = combineReducers({
  Home,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
