//Root-reducer is a combination of all reducers ex:userReducer, shopReducer e.t.c hence redux provides a a feature called combineReducers 
import { combineReducers } from 'redux'; 

import shopReducer from '../redux/shop/shop.reducer';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory.reducer';

export default combineReducers({
    user: userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})