import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { configureStore } from '@reduxjs/toolkit'

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector('#root')
);






// const container = document.getElementById('root');

// // Create a root.
// const root = ReactDOM.createRoot(container);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );