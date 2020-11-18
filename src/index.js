import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './components/App';
import store from './store';
import Api from './services/api';
import ApiProvider from './services/ApiContext';

const api = new Api();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={api}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
