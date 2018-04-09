import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import website_name from './images/website_name2.png';
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={website_name} id="name_header" alt="title" />
        </div>
        <div className="page_links">
          <h1 id="work">
            <Link to="/work" id="work_sub_header">
              Work
            </Link>
          </h1>
          <h1 id="about">
            <Link to="/about" id="about_sub_header">
              About
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
