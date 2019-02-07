import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ApiProvider} from "../context";
import ApiService from "../api-service";
import Header from '../components/header';
import MainPage from '../components/main-page';
import {
  PostPage,
  PostsPage,
  CommentPage,
  CommentsPage,
  UserPage,
  UsersPage,
} from "../components/pages/";

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
                     component={MainPage}
                     exact/>
              <Route path="/posts/"
                     component={PostsPage}
                     exact/>
              <Route path="/posts/:id"
                     component={PostPage}/>
              <Route path="/comments/"
                     component={CommentsPage}
                     exact/>
              <Route path="/comments/:id"
                     component={CommentPage}/>
              <Route path="/users/"
                     component={UsersPage}
                     exact/>
              <Route path="/users/:id"
                     component={UserPage}/>
            </Switch>
          </main>
        </Router>
      </ApiProvider>
    );
  }
}

export default App;
