import {FETCH_ALL_POSTS_REQUEST, FETCH_ALL_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from "../constants";

const postsRequested = () => {
  return {
    type: FETCH_ALL_POSTS_REQUEST,
  }
};

const postsLoaded = newPosts => {
  return {
    type: FETCH_ALL_POSTS_SUCCESS,
    payload: newPosts
  }
};

const postsError = () => {
  return {
    type: FETCH_POSTS_FAILURE
  }
};

const fetchPosts = (apiService, dispatch) => () => {
  dispatch(postsRequested());
  apiService.getAllPosts()
    .then(data => dispatch(postsLoaded(data)))
    .catch(err => {
      console.log(err);
      return dispatch(postsError())
    });
};

export {
  fetchPosts
}