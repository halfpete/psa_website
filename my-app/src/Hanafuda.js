import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import hanafuda from './images/hanafuda.png';
import './App.css';

class Hanafuda extends Component {
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
          <div id="padding_top-50px">
            <img src={hanafuda} id="hyperdrive_image" alt="hanafuda" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hanafuda;
