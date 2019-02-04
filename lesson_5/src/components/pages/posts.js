import {withData, withApiService, compose} from '../hoc';
import ItemList from '../item-list';
import Post from "../post";

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllPosts
  };
};

const Posts = compose(
  withApiService(mapMethodsToProps),
  withData(Post)
)(ItemList);

export default Posts
