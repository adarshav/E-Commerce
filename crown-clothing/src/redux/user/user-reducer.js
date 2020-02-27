import { userActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser:null
}

//reducer is function which taks action and state
//it is a ES6 feature of javascript where state is initialised to INITIAL_STATE which is an object, Means if state is not declared or defined it will take INITIAL_STATE as a default value
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
            //returning a new object
            return {
                ...state,
                currentUser:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;