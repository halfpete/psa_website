import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import hyperdrive1 from './images/hyperdrive 1.png';
import hyperdrive2 from './images/hyperdrive 2.png';
import hyperdrive3 from './images/hyperdrive 3.png';
import hanafuda from './images/hanafuda.png';
import resume from './images/resume.png';
import './App.css';

class PrintMaking extends Component {
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
        <div>
          <div id="centered">
            <Link to="/hyperdrive1">
              <img
                src={hyperdrive1}
                id="print_making_image"
                alt="hyperdrive1"
              />
            </Link>
            <Link to="/hyperdrive2">
              <img
                src={hyperdrive2}
                id="print_making_image"
                alt="hyperdrive2"
              />
            </Link>
          </div>
          <div id="centered">
            <Link to="/hyperdrive3">
              <img
                src={hyperdrive3}
                id="print_making_image"
                alt="hyperdrive3"
              />
            </Link>
            <Link to="/hanafuda">
              <img src={hanafuda} id="print_making_image" alt="hanafuda" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PrintMaking;
