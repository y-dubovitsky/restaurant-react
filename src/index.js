import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app';
import store from './redux/store';
import MoneyProvider from './context/money-context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MoneyProvider>
        <App restaurants />
      </MoneyProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);