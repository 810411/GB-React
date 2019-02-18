import {fetchUsers} from "../../actions";
import compose from "../hoc/compose";
import withApiService from "../hoc/with-api-service";
import connect from "react-redux/es/connect/connect";
import withData from "../hoc/with-data";
import User from "../user";
import ItemList from "../item-list";

const mapStateToProps = store => {
  const {items, loading, error} = store.users;

  return {
    items,
    loading,
    error
  }
};

const mapDispatchToProps = (dispatch, {apiService}) => {
  return {
    getData: fetchUsers(apiService, dispatch)
  }
};

export default compose(
  withApiService(),
  connect(mapStateToProps, mapDispatchToProps),
  withData(User)
)(ItemList);
