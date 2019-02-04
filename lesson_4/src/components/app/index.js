import React, {Component} from 'react';
import './app.css';
import Blog from '../blog';
import WelcomeModal from '../welcome-modal';

class App extends Component {
  state = {
    posts: [],
    modal: false
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/news.json')
      .then(response => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error(`${response.status}: ${response.statusText}`)
        }
      })
      .then(result =>
        this.setState({posts: result}))
      .catch(console.error);

    this.setState({
      modal: true
    })
  }

  handleClose = event => {
    event.preventDefault();

    this.setState({modal: false})
  };

  render() {
    const {posts, modal} = this.state;

    return (
      <div className="App">
        <Blog
          posts={posts}
        />
        {modal && <WelcomeModal handleClose={this.handleClose}/>}
      </div>
    );
  }
}

export default App;
