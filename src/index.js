import React from 'react';
import ReactDOM from 'react-dom';

import './i18n';

import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import ReactNotifications from 'react-notifications-component'

ReactDOM.render(
    <Provider store={configureStore({})}>
        <ReactNotifications />
        <App />
    </Provider>,
    document.getElementById('root')
);
