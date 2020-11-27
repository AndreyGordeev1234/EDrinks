import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__();
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
}

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk),
    devTools
  )
);

export default store;