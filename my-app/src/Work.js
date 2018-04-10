import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import americana from './images/americana.png';
import fauna from './images/fauna.jpg';
import untitled_1 from './images/Untitled-1.jpg';
import book10 from './images/book/Book master10.png';
import book11 from './images/book/Book master11.png';
import book12 from './images/book/Book master12.png';
import book13 from './images/book/Book master13.png';
import book14 from './images/book/Book master14.png';
import book15 from './images/book/Book master15.png';
import book16 from './images/book/Book master16.png';
import book17 from './images/book/Book master17.png';
import book18 from './images/book/Book master18.png';
import book19 from './images/book/Book master19.png';
import book20 from './images/book/Book master20.png';
import './App.css';

class Work extends Component {
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
        <div className="work_links">
          <div id="surface_design_title">
            <Link to="/surface_design" id="surface_design_title_text">
              Surface Design
            </Link>
          </div>
          <div id="print_making_title">
            <Link to="/print_making" id="print_making_title_text">
              Print Making
            </Link>
          </div>
          <div id="illustration_title">
            <Link to="/illustration" id="illustration_title_text">
              Illustration
            </Link>
          </div>
          <div id="other_title">
            <Link to="/other" id="other_title_text">
              Other
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
