import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

import { restaurants } from './fixtures';

ReactDOM.render(
  <React.StrictMode>
    <App restaurants={restaurants} />
  </React.StrictMode>,
  document.getElementById('root')
);