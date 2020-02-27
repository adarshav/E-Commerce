// now we have configured redux in the applicaion and now the job is to create the actions which trigger the reducers 
import { userActionTypes } from './user.types';
export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

//here the userAction type is hardcoded which may get an typoError so there is an solution for it
// create a file called user.types.js export a constant which is an object called SET_CURRENT_USER and call anywhere u want