import React, { Component } from 'react';
import './Features.css';

class Features extends Component {
  render() {
    return (
      <article className="Features" id="features">
        <section className="single-feature">
            <i className="fa fa-3x fa-fire"></i>
            <div className="desc">
                <p className="single-feature-title">Premium Materials</p>
                <p className="single-feature-description">Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
            </div>
        </section>
        <section className="single-feature">
            <i className="fa fa-3x fa-truck"></i>
            <div className="desc">
                <p className="single-feature-title">Fast Shipping</p>
                <p className="single-feature-description">We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
            </div>
        </section>
        <section className="single-feature">
            <i className="fa fa-3x fa-battery-full"></i>
            <div className="desc">
                <p className="single-feature-title">Quality Assurance</p>
                <p className="single-feature-description">For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
            </div>
        </section>
      </article>
    );
  }
}

export default Features;