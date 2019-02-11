import {FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS} from "../constants";

const postRequested = () => {
  return {
    type: FETCH_POST_REQUEST,
  }
};

const postLoaded = newPosts => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: newPosts
  }
};

const postError = () => {
  return {
    type: FETCH_POST_FAILURE
  }
};

const fetchPost = (id, apiService, dispatch) => () => {
  dispatch(postRequested());
  apiService.getPost(id)
    .then(data => dispatch(postLoaded(data)))
    .catch(err => {
      console.log(err);
      return dispatch(postError())
    });
};

export {
  fetchPost
}
