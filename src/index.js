import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router';

import App from './App';

import reducers from 'reducers';

const history = createBrowserHistory();

const store = createStore(connectRouter(history)(reducers), 
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)