import {withData, withApiService, compose} from '../hoc';
import ItemList from '../item-list';
import User from "../user";

const mapMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllUsers
  };
};

const Users = compose(
  withApiService(mapMethodsToProps),
  withData(User)
)(ItemList);

export default Users
