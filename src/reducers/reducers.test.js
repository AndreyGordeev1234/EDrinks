import productsReducer from './products.js';
import filtersReducer from './filters.js';
import * as types from '../constants/ActionTypes.js';

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(productsReducer(undefined, {}))
      .toEqual({
        products: [],
        loading: false,
        error: null
      });
  });

  it('should handle FETCH_PRODUCTS_REQUEST', () => {
    expect(productsReducer({}, {
        type: types.FETCH_PRODUCTS_REQUEST
      })
    ).toEqual({
      products: [],
      loading: true,
      error: null
    });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    const products = [1, 2, 3];

    expect(productsReducer({}, {
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload: products
      })
    ).toEqual({
      products: products,
      loading: false,
      error: null
    });
  });

  it('should handle FETCH_PRODUCTS_FAILURE', () => {
    const error = 'Test error.';

    expect(productsReducer({}, {
        type: types.FETCH_PRODUCTS_FAILURE,
        payload: error
      })
    ).toEqual({
      products: [],
      loading: false,
      error: error
    });
  });
});

describe('filters reducer', () => {
  it('should handle FILTER_PRODUCTS_BY_NAME', () => {
    const name = 'Test name';
    
    expect(filtersReducer({}, {
        type: types.FILTER_PRODUCTS_BY_NAME,
        payload: name
      })
    ).toEqual({
      filterName: name.trim().toLowerCase()
    });
  });

  it('should handle FILTER_PRODUCTS_BY_GROUP', () => {
    const group = 'Test group';

    expect(filtersReducer({}, {
        type: types.FILTER_PRODUCTS_BY_GROUP,
        payload: group
      })
    ).toEqual({
      filterGroup: group
    });
  });
});