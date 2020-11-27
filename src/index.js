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
import ErrorBoundry from './components/ErrorBoundry/index.js';

initEmailJS();
firebaseInit();
const api = new firebaseApi();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ApiProvider api={api}>
        <App />
      </ApiProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
