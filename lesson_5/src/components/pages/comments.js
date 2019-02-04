import {withData, withApiService, compose} from '../hoc';
import ItemList from '../item-list';
import Comment from "../comment";

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllComments
  };
};

const Comments = compose(
  withApiService(mapMethodsToProps),
  withData(Comment)
)(ItemList);

export default Comments
