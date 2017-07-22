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
    console.log(this.props);
    if (this.props.currentUser === null) {
      return (
        <div className="session-links">
          <Link to="/signup" className="auth-link">Sign Up</Link>
          <Link to="/login" className="auth-link">Log In</Link>
        </div>
      )
    } else {
      return (
        <div className="header-group">
          <Link to={`/users/${this.props.currentUser.id}`} className="user-logo"><img className="user-image-small" src={this.props.currentUser.image_url} /></Link>
          <a href='' className="logout-link" onClick={this.handleLogout}>Log Out</a>
        </div>
      )
    }
  }

  handleLogout (e) {
    e.preventDefault();
    this.props.logout().then(user => this.props.history.push('/'));
  };

  render() {
    return (
      <section>
        <nav className="navbar">
          <img src="https://res.cloudinary.com/jules-costa/image/upload/c_scale,w_400/v1497411299/Editingworlds.blogspot_7_s5deej.png" className="logo-image" />
          <h2 className="logo">Coverage Assessment</h2>
        </nav>
        {this.sessionLinks()}
      </section>
    );
  }
}

export default withRouter(Navbar);
