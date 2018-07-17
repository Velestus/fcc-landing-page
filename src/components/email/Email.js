import React, { Component } from 'react';
import './Email.css';
import Description from '../description/Description';

class Email extends Component {
  render() {
    return (
      <form name="form" className="Email" id="form" action="https://www.freecodecamp.com/email-submit" target="_blank">
        <legend for="form">Handcrafted, home-made masterpieces</legend>
        <input name="email" type="email" placeholder="Enter your email address" id="email" required />
        <input type="submit" value="GET STARTED" id="submit" />
      </form>
    );
  }
}

export default Email;