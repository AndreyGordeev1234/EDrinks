import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { initEmailJS } from './utils/emailJsInit.js';
import './index.scss';
import App from './components/App';
import store from './store';
import Api from './services/api';
import ApiProvider from './services/ApiContext';

initEmailJS();
const api = new Api();

ReactDOM.render(
  <Provider store={store}>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </Provider>,
  document.getElementById('root')
);
