import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class About extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 id="peter_ahn">
            <Link to="/" id="peter_ahn_header">
              Peter Ahn
            </Link>
          </h1>
          <h1 id="about">
            <Link to="/about" id="about_header">
              About
            </Link>
          </h1>
          <h1 id="contact">
            <Link to="/contact" id="contact_header">
              Contact
            </Link>
          </h1>
        </div>
        <div id="about_text">Why do I only get v1 boa?</div>
      </div>
    );
  }
}

export default About;
