import {
  combineReducers
} from "redux";
import products, * as fromProducts from "./products.js";
import filters from "./filters.js";
import featured from './featured.js'
import cart, * as fromCart from "./cart.js";
import checkout from "./checkout.js";

const rootReducer = combineReducers({
  products: products,
  filters: filters,
  featured: featured,
  cart: cart,
  checkout: checkout
});

const isProductsReady = state => state.products.loading || state.products.products.length === 0;

export const getTotal = state => {
  if (isProductsReady(state)) return 0;

  return fromCart.getIds(state)
    .reduce((total, id) =>
      total + fromProducts.getProduct(state, id).price * fromCart.getQuantity(state, id),
      0
    )
    .toFixed(2)
}

export const getProductsInCart = state => {
  if (isProductsReady(state)) return [];

  return fromCart.getIds(state).map(id => ({
    ...fromProducts.getProduct(state, id),
    count: fromCart.getQuantity(state, id)
  }))
}

export default rootReducer;