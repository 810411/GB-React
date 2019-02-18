import {FETCH_ALL_COMMENTS_REQUEST, FETCH_ALL_COMMENTS_SUCCESS} from "../constants";

const commentsRequested = () => {
  return {
    type: FETCH_ALL_COMMENTS_REQUEST,
  }
};

const commentsLoaded = newPosts => {
  return {
    type: FETCH_ALL_COMMENTS_SUCCESS,
    payload: newPosts
  }
};

const commentsError = () => {
  var FETCH_ALL_COMMENTS_FAILURE;
  return {
    type: FETCH_ALL_COMMENTS_FAILURE
  }
};

const fetchComments = (apiService, dispatch) => () => {
  dispatch(commentsRequested());
  apiService.getAllComments()
    .then(data => dispatch(commentsLoaded(data)))
    .catch(err => {
      console.log(err);
      return dispatch(commentsError())
    });
};

export {
  fetchComments
}