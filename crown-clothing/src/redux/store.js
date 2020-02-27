import { createStore, applyMiddleware } from 'redux';

//this is a middleware where debugging redux code makes simple
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//setting up a tepmlate for redux
// middlewares is an array where basically logger is a function provided by redux-logger and it is placced in an array
const middlewares = [logger];
//
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;