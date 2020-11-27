import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { initEmailJS } from './utils/emailJsInit.js';
import './index.scss';
import App from './components/App';
import store from './store';
import ApiProvider from './services/ApiContext';
import { firebaseInit } from './utils/firebase.js';
import firebaseApi from './services/firebaseApi.js';

initEmailJS();
firebaseInit();
const api = new firebaseApi();

ReactDOM.render(
  <Provider store={store}>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </Provider>,
  document.getElementById('root')
);
