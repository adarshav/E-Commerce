// now we have configured redux in the applicaion and now the job is to create the actions which trigger the reducers 

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})