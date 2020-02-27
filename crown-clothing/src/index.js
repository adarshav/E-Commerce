import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// importing redux in our application
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
// what is provider ?
// provider is a component provided by react-redux which wraps up all the features or the access the developers into the store and reducers we want to create for the better developement, It is parent component where entire application is wrapped under it it gives the access for the above mentioned.

