import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import americana from './images/americana.png';
import nikes from './images/nikes.png';
import shoe_coordinate from './images/shoe_coordinate.png';
import resume from './images/resume.png';
import './App.css';

class Nikes extends Component {
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
        <div id="centered">
          <div id="surface_design_work_title">"Nostalgia"</div>
        </div>
        <div id="centered">
          <div id="surface_design_work_text">
            "A pattern and illustration created from the concept of nostalgia
            and what the Americana on Brand meant to me. In my youth, the
            Americana on Brand served as a prominent memory filled with growing
            pains and happiness. The repeat design is a bird's eye view of the
            Americana itself; and the accompanying coordinate pattern depicts
            the top view of a stereotypical mall store."
          </div>
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
