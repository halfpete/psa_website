import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import book1 from './images/book/Book master.png';
import nikes from './images/nikes.png';
import shirts from './images/shirts.png';
import resume from './images/resume.png';
import './App.css';

class SurfaceDesign extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Link to="/">
          <img src={website_name} id="name_header" alt="title" />
        </Link>
        <div id="resume">
          <a href={resume} target="_blank">
            <i className="fa fa-registered" id="instagram" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/psahns/">
            <i className="fa fa-instagram" id="instagram" />
          </a>
        </div>
        <div className="page_links">
          <Link to="/about" id="first_sub_header">
            About
          </Link>
          <Link to="/contact" id="second_sub_header">
            Contact
          </Link>
        </div>
        <div className="row" id="grid_padding">
          <div className="column">
            <Link to="/collection_book">
              <img src={book1} id="grid_image" alt="book1" />
            </Link>
            <Link to="/nikes">
              <img src={nikes} id="grid_image" alt="nikes" />
            </Link>
          </div>
          <div className="column">
            <Link to="/shirts">
              <img src={shirts} id="grid_image_2" alt="shirts" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SurfaceDesign;
