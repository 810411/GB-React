import {FETCH_COMMENT_FAILURE, FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS} from "../constants";

const commentRequested = () => {
  return {
    type: FETCH_COMMENT_REQUEST,
  }
};

const commentLoaded = newPosts => {
  return {
    type: FETCH_COMMENT_SUCCESS,
    payload: newPosts
  }
};

const commentError = () => {
  return {
    type: FETCH_COMMENT_FAILURE
  }
};

const fetchComment = (id, apiService, dispatch) => () => {
  dispatch(commentRequested());
  apiService.getComment(id)
    .then(data => dispatch(commentLoaded(data)))
    .catch(err => {
      console.log(err);
      return dispatch(commentError())
    });
};

export {
  fetchComment
}
