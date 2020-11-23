import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "../constants/ActionTypes";

const initialState = {
  products: [],
  loading: false,
  error: null
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        products: [],
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload
      }
    default: 
      return state;
  }
}

export default products;