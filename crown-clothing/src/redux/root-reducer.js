//Root-reducer is a combination of all reducers ex:userReducer, shopReducer e.t.c hence redux provides a a feature called combineReducers 
import { combineReducers } from 'redux'; 

import userReducer from './user/user-reducer';


export default combineReducers({
    user: userReducer
})