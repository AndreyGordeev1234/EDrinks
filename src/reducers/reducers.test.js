import reducer from './index.js';
import * as types from '../constants/ActionTypes.js';

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        products: [],
        loading: false,
        error: null
      });
  });

  it('should handle FETCH_PRODUCTS_REQUEST', () => {
    expect(reducer({}, {
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

    expect(reducer({}, {
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

    expect(reducer({}, {
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