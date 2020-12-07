import {
  GET_CART_PRODUCTS,
  ADD_TO_CART,
  INCREMENT_PRODUCT_COUNT,
  DECREMENT_PRODUCT_COUNT,
  DELETE_PRODUCT_FROM_CART,
  CLEAR_CART
} from "../constants/ActionTypes";

const initialState = {
  products: {}
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
      case ADD_TO_CART: {
        const id = action.payload;
        const products = {
          ...state.products
        };
        if (!products[id])
          products[id] = {
            count: 1
          };
        else
          products[id].count++;

        return {
          ...state,
          products
        };
      }
      case INCREMENT_PRODUCT_COUNT: {
        const id = action.payload;
        const products = {
          ...state.products
        };
        if (products[id] &&
          products[id].count < 100) products[id].count++;

        return {
          ...state,
          products
        };
      }
      case DECREMENT_PRODUCT_COUNT: {
        const id = action.payload;
        const products = {
          ...state.products
        };
        if (products[id] &&
          products[id].count > 1) products[id].count--;

        return {
          ...state,
          products
        };
      }
      case DELETE_PRODUCT_FROM_CART: {
        const id = action.payload;
        const products = {
          ...state.products
        };
        delete products[id];

        return {
          ...state,
          products
        };
      }
      case CLEAR_CART:
        return {
          ...state,
          products: {}
        }
        default:
          return state;
  }
}

export const getIds = state => Object.keys(state.cart.products);

export const getQuantity = (state, id) => state.cart.products[id].count

export default cart;