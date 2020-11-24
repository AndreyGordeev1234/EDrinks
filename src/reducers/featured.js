const { FETCH_FEATURED_REQUEST, FETCH_FEATURED_SUCCESS, FETCH_FEATURED_FAILURE } = require("../constants/ActionTypes");

const initialState = {
  featured: [],
  loading: false,
  error: null
}

const featured = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEATURED_REQUEST:
      return {
        ...state,
        featured: [],
        loading: true,
        error: null
      };
    case FETCH_FEATURED_SUCCESS:
      return {
        ...state,
        featured: action.payload,
        loading: false,
        error: null
      };
    case FETCH_FEATURED_FAILURE:
      return {
        ...state,
        featured: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default featured;