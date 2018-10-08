import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/board';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('root')
);