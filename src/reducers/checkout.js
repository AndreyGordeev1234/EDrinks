import { FETCH_CHECKOUT_REQUEST, FETCH_CHECKOUT_SUCCESS, FETCH_CHECKOUT_FAILURE, CLEAR_SUCCESS } from "../constants/ActionTypes";

const initalState = {
  checkout: {},
  loading: false,
  error: null
}

const checkout = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_CHECKOUT_REQUEST:
      return {
        ...state,
        checkout: {},
        loading: true,
        error: null
      };
    case FETCH_CHECKOUT_SUCCESS:
      return {
        ...state,
        checkout: action.payload,
        loading: false,
        error: null
      };
    case FETCH_CHECKOUT_FAILURE:
      return {
        ...state,
        checkout: {},
        loading: false,
        error: action.payload
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        checkout: {},
        loading: false,
        error: null
      }
    default:
      return state;
  }
}

export default checkout;