import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router-dom';
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

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 id="peter_ahn">
            <Link to="/home" id="peter_ahn_header">
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
        <div className="body">
          <img src={fauna} id="americana" alt="americana" />
          <div className="row" id="grid_padding">
            <div className="column">
              <img src={book14} id="grid_image" alt="untitled_1" />
              <img src={americana} id="grid_image" alt="fauna" />
              <img src={book15} id="grid_image" alt="fauna" />
              <img src={book16} id="grid_image" alt="fauna" />
            </div>
            <div className="column">
              <img src={book17} id="grid_image" alt="untitled_1" />
              <img src={book18} id="grid_image" alt="fauna" />
              <img src={book19} id="grid_image" alt="fauna" />
              <img src={book20} id="grid_image" alt="fauna" />
            </div>
            <div className="column">
              <img src={book10} id="grid_image" alt="untitled_1" />
              <img src={book11} id="grid_image" alt="fauna" />
              <img src={book12} id="grid_image" alt="fauna" />
              <img src={book13} id="grid_image" alt="fauna" />
            </div>
          </div>
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

export default Home;
