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
          <div>
            <img src={face} id="troll" alt="troll" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
