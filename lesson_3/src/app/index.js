import React, { Component } from 'react';
import './app.css';
import Menu from '../menu';
import Login from "../login";

class App extends Component {
  state = {
    menu_items: [],
    viewingLogin: false
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/menu-items.jso')
      .then(response => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
      })
      .then(result =>
        this.setState({menu_items: result}))
      .catch(console.error)
  }

  handleOnMenuClick = event => {
    event.preventDefault();
    const targetValue = event.target.href.split('/').pop();

    if(targetValue === '#login') {
      this.setState({viewingLogin: true})
    }
  };

  handleLoginOn = event => {
    event.preventDefault();

    this.setState({viewingLogin: false})
  };

  render() {
    const {menu_items, viewingLogin} = this.state;

    return (
      <div className="App">
        <Menu
          items={menu_items}
          handleOnMenuClick={this.handleOnMenuClick}
        />
        {viewingLogin && <Login handleLoginOn={this.handleLoginOn}/>}
      </div>
    );
  }
}

export default App;
