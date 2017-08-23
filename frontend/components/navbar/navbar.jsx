import React from 'react';
import Session from '../auth/session';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  sessionLinks () {
    if (this.props.currentUser === null) {
      return (
        <section className="navbar-group session-links">
          <Link to="/about" className="auth-link">About Frank</Link>
          <Link to="/write" className="auth-link">Write</Link>
          <Link to="/signup" className="auth-link">Sign Up</Link>
          <Link to="/login" className="auth-link">Log In</Link>
        </section>
      );
    } else {
      return (
        <div className="navbar-group">
          <Link to="/about" className="auth-link">About Frank</Link>
          <a href='' className="auth-link" onClick={this.handleLogout}>Log Out</a>
        </div>
      );
    }
  }

  handleLogout (e) {
    e.preventDefault();
    this.props.logout().then(user => this.props.history.push('/'));
  }

  render() {
    return (
      <nav className="navbar">
        <section className="navbar-group">
          <Link to={"/"}>
            <img src="https://res.cloudinary.com/jules-costa/image/upload/c_scale,w_400/v1497411299/Editingworlds.blogspot_7_s5deej.png" className="logo-image" />
          </Link>
          <Link to={"/"}>
            <h2 className="logo">Coverage Assessment</h2>
          </Link>
        </section>
          {this.sessionLinks()}
      </nav>
    );
  }
}

export default withRouter(Navbar);
