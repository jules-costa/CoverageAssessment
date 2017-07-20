import React from 'react';
import Session from '../auth/session';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <nav className="navbar">
          <img src="https://res.cloudinary.com/jules-costa/image/upload/c_scale,w_400/v1497411299/Editingworlds.blogspot_7_s5deej.png" className="logo-image" />
          <h2 className="logo">Coverage Assessment</h2>
        </nav>
        
      </section>
    );
  }
}

export default Navbar;
