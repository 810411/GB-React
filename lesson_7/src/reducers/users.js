import {FETCH_ALL_USERS_REQUEST, FETCH_ALL_USERS_SUCCESS, FETCH_USERS_FAILURE} from "../constants";

const initialState = {
  items: [],
  loading: true,
  error: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_REQUEST:
      return {
        items: [],
        loading: true,
        error: false
      };

    case FETCH_ALL_USERS_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: false
      };

    case FETCH_USERS_FAILURE:
      return {
        items: [],
        loading: false,
        error: true
      };

    default:
      return state

  }
};

export default usersReducer
