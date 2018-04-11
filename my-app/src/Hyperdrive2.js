import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import hyperdrive2 from './images/hyperdrive 2.png';
import './App.css';

class Hyperdrive2 extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src={website_name} id="name_header" alt="title" />
        </Link>
        <div className="page_links">
          <Link to="/about" id="first_sub_header">
            About
          </Link>
          <Link to="/contact" id="second_sub_header">
            Contact
          </Link>
        </div>
        <div id="centered">
          <img src={hyperdrive2} id="hyperdrive_image" alt="hyperdrive2" />
        </div>
      </div>
    );
  }
}

export default Hyperdrive2;
