import {FETCH_ALL_COMMENTS_REQUEST, FETCH_ALL_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE} from "../constants";

const initialState = {
  items: [],
  loading: true,
  error: false
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COMMENTS_REQUEST:
      return {
        items: [],
        loading: true,
        error: false
      };

    case FETCH_ALL_COMMENTS_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: false
      };

    case FETCH_COMMENTS_FAILURE:
      return {
        items: [],
        loading: false,
        error: true
      };

    default:
      return state

  }
};

export default commentsReducer
