import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
  render() {
    return (
      <article className="Description" id="description">
        <iframe id="video" height="315" src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      </article>
    );
  }
}

export default Description;