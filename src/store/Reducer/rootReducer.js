import { combineReducers } from 'redux';
import todooReducer from './signupReducer';
import getReducer from  './getReducer'
import deleteReducer from './deleteReducer'
const RootReducer = combineReducers(
    {
     todooReducer,
     getReducer,
     deleteReducer
    }
);
export default RootReducer;
