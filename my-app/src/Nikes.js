import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import americana from './images/americana.png';
import nikes from './images/nikes.png';
import shoe_coordinate from './images/shoe_coordinate.png';
import './App.css';

class Nikes extends Component {
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
        <div id="nikes_image">
          <img src={nikes} id="grid_image" alt="nikes" />
        </div>
        <div id="nikes_second_row">
          <img src={americana} id="grid_image_3" alt="americana" />
          <img src={shoe_coordinate} id="grid_image_3" alt="shoe_coordinate" />
        </div>
      </div>
    );
  }
}

export default Nikes;
