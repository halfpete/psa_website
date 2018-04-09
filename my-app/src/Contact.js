import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Contact extends Component {
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
        <div id="contact_text">
          <form
            action="mailto:psa395@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div>
              Name:
              <input type="text" name="name" />
            </div>
            <div>
              E-mail:
              <input type="text" name="mail" />
            </div>
            <div>
              Comment:
              <input type="text" name="comment" className="set-width" />
            </div>
            <div>
              <input type="submit" value="Send" />
              <input type="reset" value="Reset" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
