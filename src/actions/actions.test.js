import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index.js';
import * as types from '../constants/ActionTypes.js';
import Api from '../services/api.js';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  const products = [1, 2, 3]

  afterEach(() => {
    window.fetch = () => {};
  });

  it('creates FETCH_PRODUCTS_SUCCESS when fetching products has been done', () => {
    const mockResponse = (status, statusText, response) => {
      return new window.Response(response, {
        status: status,
        statusText: statusText,
        headers: {
          'Content-type': 'application/json'
        }
      });
    };
    
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(products))));

    const expectedActions = [
      { type: types.FETCH_PRODUCTS_REQUEST },
      { type: types.FETCH_PRODUCTS_SUCCESS, payload: products }
    ];
    const store = mockStore({ 
      products: [],
      loading: false,
      error: null
    });

    return store.dispatch(actions.fetchProducts(new Api()))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('sync actions', () => {
  it('should create an action to filter by name', () => {
    const name = 'Test name';
    const expectedAction = {
      type: types.FILTER_PRODUCTS_BY_NAME,
      payload: name
    };

    expect(actions.filterProductsByName(name)).toEqual(expectedAction);
  });

  it('should create an action to filter by group', () => {
    const group = 'Test group';
    const expectedAction = {
      type: types.FILTER_PRODUCTS_BY_GROUP,
      payload: group
    };

    expect(actions.filterProductByGroup(group)).toEqual(expectedAction);
  });
});