import {fetchPost} from "../../actions";
import compose from "../hoc/compose";
import withApiService from "../hoc/with-api-service";
import connect from "react-redux/es/connect/connect";
import withData from "../hoc/with-data";
import Post from "../post";
import ItemList from "../item-list";

const mapStateToProps = store => {
  const {items, loading, error} = store.post;

  return {
    items,
    loading,
    error
  }
};

const mapDispatchToProps = (dispatch, {apiService, match}) => {
  const id = match.params.id;

  return {
    getData: fetchPost(id, apiService, dispatch)
  }
};

export default compose(
  withApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withData(Post)
)(ItemList);
