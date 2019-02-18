import {fetchUser} from "../../actions";
import compose from "../hoc/compose";
import withApiService from "../hoc/with-api-service";
import connect from "react-redux/es/connect/connect";
import withData from "../hoc/with-data";
import User from "../user";
import ItemList from "../item-list";

const mapStateToProps = store => {
  const {items, loading, error} = store.user;

  return {
    items,
    loading,
    error
  }
};

const mapDispatchToProps = (dispatch, {apiService, match}) => {
  const id = match.params.id;

  return {
    getData: fetchUser(id, apiService, dispatch)
  }
};

export default compose(
  withApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withData(User)
)(ItemList);
