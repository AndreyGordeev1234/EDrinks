import { 
  FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, 
  FILTER_PRODUCTS_BY_NAME, FILTER_PRODUCTS_BY_GROUP, SORT_PRODUCTS, FETCH_FEATURED_REQUEST, 
  FETCH_FEATURED_SUCCESS, FETCH_FEATURED_FAILURE, GET_CART_PRODUCTS, ADD_TO_CART, 
  INCREMENT_PRODUCT_COUNT, DECREMENT_PRODUCT_COUNT, DELETE_PRODUCT_FROM_CART, FETCH_CHECKOUT_REQUEST,
  FETCH_CHECKOUT_SUCCESS, FETCH_CHECKOUT_FAILURE, CLEAR_CART, CLEAR_SUCCESS } from "../constants/ActionTypes";
import { sendEmail } from "../utils/emailJsInit";

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

export const filterProductsByGroup = (group) => ({
  type: FILTER_PRODUCTS_BY_GROUP,
  payload: group
});

export const sortProducts = (sortType) => ({
  type: SORT_PRODUCTS,
  payload: sortType
});

const featuredRequested = () => ({
  type: FETCH_FEATURED_REQUEST
});

const featuredLoaded = (featured) => ({
  type: FETCH_FEATURED_SUCCESS,
  payload: featured
});

const featuredError = (error) => ({
  type: FETCH_FEATURED_FAILURE,
  payload: error
});

export const fetchFeatured = (apiService) => async (dispatch) => {
  try {
    dispatch(featuredRequested());
    const featured = await apiService.getFeatured();
    dispatch(featuredLoaded(featured));
  } catch (e) {
    dispatch(featuredError(e));
  }
};

export const getCartProducts = (products) => ({
  type: GET_CART_PRODUCTS,
  payload: products
});

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId
});

export const clearCart = () => ({
  type: CLEAR_CART
})

export const incrementProductCount = (productId) => ({
  type: INCREMENT_PRODUCT_COUNT,
  payload: productId
});

export const decrementProductCount = (productId) => ({
  type: DECREMENT_PRODUCT_COUNT,
  payload: productId
});

export const deleteProductFromCart = (productId) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: productId
})

const checkoutRequested = () => ({
  type: FETCH_CHECKOUT_REQUEST
})

const checkoutLoaded = (orderId) => ({
  type: FETCH_CHECKOUT_SUCCESS,
  payload: orderId
})

const checkoutError = (error) => ({
  type: FETCH_CHECKOUT_FAILURE,
  payload: error
})

export const fetchCheckout = (apiService, products, userInfo) => async (dispatch) => {
  try{
    dispatch(checkoutRequested());
    const checkout = await apiService.checkout(userInfo, products);
    sendEmail(checkout.orderId, userInfo.firstName, userInfo.email, products);
    dispatch(checkoutLoaded(checkout))
    dispatch(clearCart());
  } catch (e) {
    dispatch(checkoutError(e));
  }
}

export const clearSuccess = () => ({
  type: CLEAR_SUCCESS
})