import React, {Component} from 'react';
import {ApiConsumer} from "../context";

const withData = Element => View => {
  return class extends Component {
    state = {
      data: []
    };

    componentDidMount() {
      this.props.getData()
        .then(data => {
          this.setState({
            data
          })
        })
    }

    render() {
      return <View item={Element} {...this.props} {...this.state} />;
    }
  };
};

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

const compose = (...funcs) => (comp) => {
  return funcs.reduceRight(
    (wrapped, f) => f(wrapped), comp);
};

export {
  withData,
  withApiService,
  compose
}
