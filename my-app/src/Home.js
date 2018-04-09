import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import title from './images/title image.png';
import website_name from './images/website_name.png';
import troll from './images/troll.png';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={title} id="title_image" alt="title" />
        </div>
        <div id="page_wrap">
          <div>
            <img src={website_name} id="name" alt="website_name" />
          </div>
          <div className="home_links">
            <h1 id="work">
              <Link to="/work" id="work_header">
                Work
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
        </div>
      </div>
    );
  }
}

export default Home;
