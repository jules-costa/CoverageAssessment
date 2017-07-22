import React from 'react';
import Session from '../auth/session';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.sessionLinks = this.sessionLinks.bind(this);
  }

  sessionLinks () {
    if (currentUser === null) {
      <Link to="/api/signup" className="auth-link">Sign Up</Link>
      <Link to="/api/login" className="auth-link">Log In</Link>
    } else {
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
        <div>
          {this.sessionLinks()}
        </div>
      </section>
    );
  }
}

export default Navbar;
