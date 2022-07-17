import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)} >
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