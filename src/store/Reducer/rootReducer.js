import { combineReducers } from 'redux';
import todooReducer from './signupReducer';
import getReducer from  './getReducer'
const RootReducer = combineReducers(
    {
     todooReducer,
     getReducer
    }
);
export default RootReducer;
