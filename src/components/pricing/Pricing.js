import React, { Component } from 'react';
import './Pricing.css';

class Pricing extends Component {
  render() {
    return (
      <article className="Pricing" id="pricing">
        <section className="single-price">
          <div className="price-header">
            <p>Tenor Trombone</p>
          </div>
          <div className="price-details">
            <p className="price-amount">$600</p>
            <p>Lorem ipsum.</p>
            <p>Lorem ipsum.</p>
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum.</p>
          </div>
          <button className="price-select">Select</button>
        </section>
        <section className="single-price">
          <div className="price-header">
            <p>Bass Trombone</p>
          </div>
          <div className="price-details">
            <p className="price-amount">$900</p>
            <p>Lorem ipsum.</p>
            <p>Lorem ipsum.</p>
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum.</p>
          </div>
          <button className="price-select">Select</button>
        </section>
        <section className="single-price">
          <div className="price-header">
            <p>Valve Trombone</p>
          </div>
          <div className="price-details">
            <p className="price-amount">$1200</p>
            <p>Plays similar to a Trumpet.</p>
            <p>Grat for Jazz Bands.</p>
            <p>Lorem ipsum dolor.</p>
            <p>Lorem ipsum.</p>
          </div>
          <button className="price-select">Select</button>
        </section>
      </article>
    );
  }
}

export default Pricing;