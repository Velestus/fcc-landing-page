import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="Navbar-header" id="header">
          <img src="https://s3.amazonaws.com/freecodecamp/original_trombones.png" alt="original trombones logo" id="header-img"/>
          <nav id="nav-bar">
            <ul id="nav-links">
                <li><a className="nav-link" href="#features">Features</a></li>
                <li><a className="nav-link" href="#description">How&nbsp;It&nbsp;Works</a></li>
                <li><a className="nav-link" href="#pricing">Pricing</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
