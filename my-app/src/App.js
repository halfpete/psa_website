import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
import americana from './images/americana.png';
import fauna from './images/fauna.jpg';
import untitled_1 from './images/Untitled-1.jpg';
import './App.css';
//<div className="body">
//<div className="row" id="grid_padding">
//<div className="column">
//<img src={untitled_1} id="grid_image" alt="untitled_1" />
//<img src={fauna} id="grid_image" alt="fauna" />
//<img src={fauna} id="grid_image" alt="fauna" />
//</div>
//<div className="column">
//<img src={untitled_1} id="grid_image" alt="untitled_1" />
//<img src={fauna} id="grid_image" alt="fauna" />
//<img src={fauna} id="grid_image" alt="fauna" />
//</div>
//</div>
//</div>

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
          <img src={americana} id="americana" alt="americana" />
          <img src={americana} id="americana2" alt="americana" />
          <img src={americana} id="americana3" alt="americana" />
        </div>
        <div className="footer">
          <div>Peter Ahn</div>
          <div>
            <a href="mailto:psa395@gmail.com">psa395@gmail.com</a>
          </div>
          <div>818.669.0174</div>
          <div>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <a href="#" class="fa fa-instagram" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
