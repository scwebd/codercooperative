import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'


class Homepage extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.state = {
      username: null
    }
  }


  componentDidMount(props) {
    this.setState({
      username: this.props.user
    })
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-transparent" id="navstyle">
        <a className="navbar-brand" href="/"> <img src={require("../components/images/coderCoopTexOnly_GREEN.png")}
          style={{ width: '400px' }} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">&lt;home /&gt;<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/developers">&lt;developers /&gt;</a>
            </li>
          </ul>
          {loggedIn ? (
              <span>
                <p style="color: white">Welcome: {this.state.username}!</p>
                <li className="nav-item">
                  <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                    <span className="text-secondary">Logout</span></Link>
                </li>
              </span>
            ) : (
                <span>
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-link text-secondary">
                      <span className="text-secondary">Login</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="btn btn-link text-secondary">
                      <span className="text-secondary">Sign up</span>
                    </Link>
                  </li>
                </span>
              )}
        </div>
      </nav>
    )
  }


}

export default Homepage;
