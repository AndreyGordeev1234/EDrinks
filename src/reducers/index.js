import { combineReducers } from "redux";
import products from "./products.js";
import filters from "./filters.js";
import featured from './featured.js'
import cart from "./cart.js";

const rootReducer = combineReducers({
  products: products,
  filters: filters,
  featured: featured,
  cart: cart
});

export default rootReducer;