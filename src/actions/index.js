import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FILTER_PRODUCTS_BY_NAME, FILTER_PRODUCTS_BY_GROUP } from "../constants/ActionTypes";

const productsRequested = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

const productsLoaded = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

const productsError = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error
});

export const fetchProducts = (apiService) => async (dispatch) => {
  try {
    dispatch(productsRequested());
    const products = await apiService.getProducts();
    dispatch(productsLoaded(products));
  } catch (err) {
    dispatch(productsError(err))
  }
}

export const filterProductsByName = (name) => ({
  type: FILTER_PRODUCTS_BY_NAME,
  payload: name
});

export const filterProductByGroup = (group) => ({
  type: FILTER_PRODUCTS_BY_GROUP,
  payload: group
});
