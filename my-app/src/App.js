import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import americana from './images/americana.png';
import fauna from './images/fauna.jpg';
import untitled_1 from './images/Untitled-1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="header">
          <h1 id="peter_ahn">
            <a href="" id="peter_ahn_text">
              Peter Ahn
            </a>
          </h1>
          <h1 id="about">
            <a href="" id="about_text">
              About
            </a>
          </h1>
          <h1 id="contact">
            <a href="" id="contact_text">
              Contact
            </a>
          </h1>
        </div>
        <body>
          <div>
            <img src={americana} id="wallpaper_header" alt="americana" />
          </div>
          <div class="row" id="grid_padding">
            <div class="column">
              <img src={untitled_1} id="grid_image" alt="untitled_1" />
              <img src={fauna} id="grid_image" alt="fauna" />
              <img src={fauna} id="grid_image" alt="fauna" />
            </div>
            <div class="column">
              <img src={untitled_1} id="grid_image" alt="untitled_1" />
              <img src={fauna} id="grid_image" alt="fauna" />
              <img src={fauna} id="grid_image" alt="fauna" />
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
