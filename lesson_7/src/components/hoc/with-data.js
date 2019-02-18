import React, {Component} from 'react';
import Spinner from "../spinner";
import ErrorPage from "../error-page";


const withData = Element => View => {
  return class extends Component {

    componentDidMount() {
      this.props.getData()
    }

    render() {
      const {history, items, loading, error} = this.props;

      if (loading) {
        return (
          <Spinner />
        )
      }

      if (error) {
        return <ErrorPage />
      }

      return (
        <View {...this.props}>
          {
            items.map(item => (
                <Element
                  handleClick={() =>
                    history.push(`${item.id}`)}
                  key={item.id}
                  {...item}/>
              )
            )
          }
        </View>
      );
    }
  };
};

export default withData
