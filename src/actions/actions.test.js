import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index.js';
import * as types from '../constants/ActionTypes.js';
import Api from '../services/api.js';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      }
    });
  };

  afterEach(() => {
    window.fetch = () => {};
  });

  it('creates FETCH_PRODUCTS_SUCCESS when fetching products has been done', () => {
    const products = [1, 2, 3];

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

  it('creates FETCH_FEATURED_SUCCESS when fetching featured has been done', () => {
    const featured = [0, 1, 2];
    
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(featured))));

    const expectedActions = [
      { type: types.FETCH_FEATURED_REQUEST },
      { type: types.FETCH_FEATURED_SUCCESS, payload: featured }
    ]
    const store = mockStore({
      featured: [],
      loading: false,
      error: null
    })

    return store.dispatch(actions.fetchFeatured(new Api()))
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

    expect(actions.filterProductsByGroup(group)).toEqual(expectedAction);
  });

  it('should create an action to sort products', () => {
    const sortType = 'Test sort';
    const expectedAction = {
      type: types.SORT_PRODUCTS,
      payload: sortType
    };

    expect(actions.sortProducts(sortType)).toEqual(expectedAction);
  });
});