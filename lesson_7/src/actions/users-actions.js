import {FETCH_ALL_USERS_REQUEST, FETCH_ALL_USERS_SUCCESS, FETCH_USERS_FAILURE} from "../constants";

const usersRequested = () => {
  return {
    type: FETCH_ALL_USERS_REQUEST,
  }
};

const usersLoaded = newPosts => {
  return {
    type: FETCH_ALL_USERS_SUCCESS,
    payload: newPosts
  }
};

const usersError = () => {
  return {
    type: FETCH_USERS_FAILURE
  }
};

const fetchUsers = (apiService, dispatch) => () => {
  dispatch(usersRequested());
  apiService.getAllUsers()
    .then(data => dispatch(usersLoaded(data)))
    .catch(err => {
      console.log(err);
      return dispatch(usersError())
    });
};

export {
  fetchUsers
}
