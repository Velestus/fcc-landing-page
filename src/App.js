import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Features from './components/features/Features';
import Description from './components/description/Description';
import Pricing from './components/pricing/Pricing';
import Email from './components/email/Email';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navbar />
        <Email />
        <Features />
        <Description />
        <Pricing />
      </main>
    );
  }
}

export default App;
