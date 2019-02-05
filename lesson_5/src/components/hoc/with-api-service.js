import React from 'react';
import {ApiConsumer} from "../../context";

const withApiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <ApiConsumer>
        {
          (apiService) => {
            const serviceProps = mapMethodsToProps(apiService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </ApiConsumer>
    );
  }
};

export default withApiService
