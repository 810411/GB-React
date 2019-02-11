import {combineReducers} from "redux";
import postsReducer from './posts';
import postReducer from "./post";
import commentsReducer from "./comments";
import commentReducer from "./comment";
import usersReducer from "./users";
import userReducer from "./user";


const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
  comment: commentReducer,
  users: usersReducer,
  user: userReducer
});

export default rootReducer
