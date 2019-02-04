import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ApiProvider} from "../components/context";
import {ApiService} from "../api-services";
import Header from '../components/header';
import Main from '../components/main';
import Posts from '../components/pages/posts';
import Comments from '../components/pages/comments';
import Users from "../components/pages/users";

class App extends Component {
  state = {
    apiService: new ApiService()
  };

  render() {
    return (
      <ApiProvider value={this.state.apiService}>
        <Router>
          <main className="App">
            <Header/>
            <Switch>
              <Route path="/"
                     component={Main}
                     exact/>
              <Route path="/posts"
                     component={Posts}/>
              <Route path="/comments"
                     component={Comments}/>
              <Route path="/users"
                     component={Users}/>
            </Switch>
          </main>
        </Router>
      </ApiProvider>
    );
  }
}

export default App;
