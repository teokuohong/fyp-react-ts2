import { combineReducers } from 'redux'
import loggedInReducer from './isLoggedIn'
import counterReducer from './counter'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedInReducer
})

export default allReducers;