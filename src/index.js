import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './css/site.css';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import * as ActionTypes from './actions/types';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(rootReducer);

if (localStorage.getItem('auth_token')) {
    store.dispatch({
        type: ActionTypes.CHANGE_AUTH,
        payload: true
    });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.container')
);
