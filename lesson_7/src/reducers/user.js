import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "../constants";

const initialState = {
  items: [],
  loading: true,
  error: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        items: [],
        loading: true,
        error: false
      };

    case FETCH_USER_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: false
      };

    case FETCH_USER_FAILURE:
      return {
        items: [],
        loading: false,
        error: true
      };

    default:
      return state

  }
};

export default userReducer
