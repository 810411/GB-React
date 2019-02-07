import {withData, withApiService, compose} from '../hoc';
import ItemList from '../item-list';
import User from "../user";
import Post from "../post";
import Comment from "../comment";

const PostsPage = compose(
  withApiService(apiService =>
    ({getData: apiService.getAllPosts})),
  withData(Post)
)(ItemList);

const PostPage = compose(
  withApiService(apiService =>
    ({getData: apiService.getPost})),
  withData(Post)
)(ItemList);

const CommentsPage = compose(
  withApiService(apiService =>
    ({getData: apiService.getAllComments})),
  withData(Comment)
)(ItemList);

const CommentPage = compose(
  withApiService(apiService =>
    ({getData: apiService.getComment})),
  withData(Comment)
)(ItemList);

const UsersPage = compose(
  withApiService(apiService =>
    ({getData: apiService.getAllUsers})),
  withData(User)
)(ItemList);

const UserPage = compose(
  withApiService(apiService =>
    ({getData: apiService.getUser})),
  withData(User)
)(ItemList);

export {
  PostsPage,
  PostPage,
  CommentsPage,
  CommentPage,
  UserPage,
  UsersPage
}
