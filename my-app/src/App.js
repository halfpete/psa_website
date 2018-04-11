import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import title from './images/title image.png';
import face from './images/face.png';
import website_name from './images/websitename2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div>
          <img src={title} id="title_image" alt="title" />
        </div>
        <div id="page_wrap">
          <div id="padding-10px">
            <div>
              <img src={website_name} id="name" alt="website_name" />
            </div>
            <div>
              <a href="https://www.instagram.com/psahns/">
                <i className="fa fa-instagram" id="home_instagram" />
              </a>
            </div>
            <div className="home_links">
              <Link to="/work" id="work_header">
                Work
              </Link>
              <Link to="/about" id="about_header">
                About
              </Link>
              <Link to="/contact" id="contact_header">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <img src={face} id="face" alt="face" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
