import {FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS} from "../constants";

const initialState = {
  items: [],
  loading: true,
  error: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        items: [],
        loading: true,
        error: false
      };

    case FETCH_POST_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: false
      };

    case FETCH_POST_FAILURE:
      return {
        items: [],
        loading: false,
        error: true
      };

    default:
      return state

  }
};

export default postReducer
