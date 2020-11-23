import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FILTER_PRODUCTS_BY_NAME } from "../constants/ActionTypes";

const initialState = {
  products: [],
  loading: false,
  error: null,
  filterName: ''
}

const reducer = (state = initialState, action) => {
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
    case FILTER_PRODUCTS_BY_NAME:
      return {
        ...state,
        filterName: action.payload.toLowerCase()
      }
    default: 
      return state;
  }
}

export default reducer;