import {FETCH_COMMENT_FAILURE, FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS} from "../constants";

const initialState = {
  items: [],
  loading: true,
  error: false
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENT_REQUEST:
      return {
        items: [],
        loading: true,
        error: false
      };

    case FETCH_COMMENT_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: false
      };

    case FETCH_COMMENT_FAILURE:
      return {
        items: [],
        loading: false,
        error: true
      };

    default:
      return state

  }
};

export default commentReducer
