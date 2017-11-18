import React, { Component } from 'react';
import { logout } from '../Actions/UserActions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../Styles/App.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">ACM Event Tracker</a>
        <button className="navbar-toggler"
          type="button" data-toggle="collapse" data-target="#navbarColor01" 
          aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            {this.props.loggedIn ?
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={() => {this.props.logout();}}>Logout</a>
              </li> :
              <li className="nav-item">
                <a className="nav-link" href="/Login">Login</a>
              </li>    
            }
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
    return {
      user: state.user
    };
}
export default withRouter(connect(mapStateToProps, {logout})(Header));
