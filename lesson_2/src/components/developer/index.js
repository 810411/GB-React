import React, {Component, Fragment} from 'react';

class Developer extends Component {
  constructor(props) {
    super(props);
    this.name = 'Grigorii';
    this.city = 'Ufa';
  }

  render() {
    return (
      <Fragment>
        <h1>Name: {this.name}</h1>
        <h2>City: {this.city}</h2>
      </Fragment>
    )
  }
}

export default Developer
