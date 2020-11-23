import { combineReducers } from "redux";
import products from "./products";
import filters from "./filters";

const rootReducer = combineReducers({
  products: products,
  filters: filters
});

export default rootReducer;