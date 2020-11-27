import { combineReducers } from "redux";
import products from "./products.js";
import filters from "./filters.js";
import featured from './featured.js'
import cart from "./cart.js";
import checkout from "./checkout.js";

const rootReducer = combineReducers({
  products: products,
  filters: filters,
  featured: featured,
  cart: cart,
  checkout: checkout
});

export default rootReducer;