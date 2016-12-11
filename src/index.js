import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux'
import {rootReducer} from './reducers'
import promiseMiddleware from 'redux-promise-middleware'

const store = createStore(rootReducer,
  applyMiddleware(
    promiseMiddleware(),logger()
    )
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);