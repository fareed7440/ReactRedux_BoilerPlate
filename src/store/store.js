import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import SignupReducer from './Reducer/signupReducer'
const logger = createLogger();
const store = createStore(
      SignupReducer,
    applyMiddleware(thunk , logger));

export default store;



