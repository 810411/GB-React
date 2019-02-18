import {FETCH_ALL_POSTS_REQUEST, FETCH_ALL_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from "../constants";

const initialState = {
  items: [],
  loading: true,
  error: false
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_REQUEST:
      return {
        items: [],
        loading: true,
        error: false
      };

    case FETCH_ALL_POSTS_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: false
      };

    case FETCH_POSTS_FAILURE:
      return {
        items: [],
        loading: false,
        error: true
      };

    default:
      return state

  }
};

export default postsReducer
