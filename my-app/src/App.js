import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import americana from './images/americana.png';
import fauna from './images/fauna.jpg';
import untitled_1 from './images/Untitled-1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 id="peter_ahn">
            <Link to="/" id="peter_ahn_header">
              Peter Ahn
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
          <img src={americana} id="wallpaper_header" alt="americana" />
        </div>
        <div className="body">
          <div className="row" id="grid_padding">
            <div className="column">
              <img src={untitled_1} id="grid_image" alt="untitled_1" />
              <img src={fauna} id="grid_image" alt="fauna" />
              <img src={fauna} id="grid_image" alt="fauna" />
            </div>
            <div className="column">
              <img src={untitled_1} id="grid_image" alt="untitled_1" />
              <img src={fauna} id="grid_image" alt="fauna" />
              <img src={fauna} id="grid_image" alt="fauna" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
