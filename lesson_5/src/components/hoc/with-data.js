import React, {Component} from 'react';
import Spinner from "../spinner";

const withData = Element => View => {
  return class extends Component {
    state = {
      onLoading: true,
      data: []
    };

    componentDidMount() {
      const id = this.props.match.params.id;

      this.props.getData(id)
        .then(data => {
          this.setState({
            onLoading: false,
            data
          })
        })
    }

    render() {
      const {history, location} = this.props;

      if (this.state.onLoading) {
        return (
          <Spinner />
        )
      }

      return (
        <View {...this.props}>
          {
            this.state.data.map(item => (
                <Element
                  handleClick={() =>
                    history.push(`${location.pathname}${item.id}`)}
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
