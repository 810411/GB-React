import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "../constants";

const userRequested = () => {
  return {
    type: FETCH_USER_REQUEST,
  }
};

const userLoaded = newPosts => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: newPosts
  }
};

const userError = () => {
  return {
    type: FETCH_USER_FAILURE
  }
};

const fetchUser = (id, apiService, dispatch) => () => {
  dispatch(userRequested());
  apiService.getUser(id)
    .then(data => dispatch(userLoaded(data)))
    .catch(err => {
      console.log(err);
      return dispatch(userError())
    });
};

export {
  fetchUser
}
