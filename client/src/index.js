

import React from 'react';
import reactDOM from 'react-dom';
import App from './app';

import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

var store = createStore(reducers, applyMiddleware(reduxThunk));

reactDOM.render(
<Provider store={store}>
    <div>
        <App />
    </div>
</Provider>,
document.getElementById('root'));