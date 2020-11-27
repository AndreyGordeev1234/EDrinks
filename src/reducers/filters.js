import { FILTER_PRODUCTS_BY_NAME, FILTER_PRODUCTS_BY_GROUP, SORT_PRODUCTS } from "../constants/ActionTypes";

const initialState = {
  filterName: '',
  filterGroup: 'All',
  sortType: ''
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS_BY_NAME:
      return {
        ...state,
        filterName: action.payload.trim().toLowerCase()
      };
    case FILTER_PRODUCTS_BY_GROUP:
      return {
        ...state,
        filterGroup: action.payload
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        sortType: action.payload
      }
    default: 
      return state;
  }
}

export default filters;