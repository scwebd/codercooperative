

import React, { Component } from 'react';
import './App.css';
import Homepage from "./pages/homepage";
import Developers from './pages/developers';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import Signup from './components/sign-up'
import LoginForm from './components/login-form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    console.log("WORKING!!!!!!!")
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
    <div>
    <Switch>
        <Route exact path="/" render={() =>
            
            <Homepage
            user={this.state.username} updateUser={this.updateUser} loggedIn={this.state.loggedIn}
            />} 
        />
        <Route exact path="/developers" component={Developers} />
        <Route path="/books/:id" component={Homepage} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
      </Switch>
    </div>
  </Router>
    );
  }
}

export default App;

