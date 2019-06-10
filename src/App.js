import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import Routers from './routes/index';
import configureStore from './store/configureStore';
const store = configureStore();
import './static/css/reset';
import './static/css/main';

// store.subscribe(() =>
//     console.log(store.getState())
// );
const App = () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);

export default hot(App);
