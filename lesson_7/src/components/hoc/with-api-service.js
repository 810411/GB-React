import React from 'react';
import {ApiConsumer} from "../../context";

const withApiService = () => (Wrapped) => {
  return props => {
    return (
      <ApiConsumer>
        {
          apiService => {
            return (
              <Wrapped {...props}
                       apiService={apiService} />
            );
          }
        }
      </ApiConsumer>
    );
  }
};

export default withApiService
