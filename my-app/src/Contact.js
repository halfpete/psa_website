import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import whats_gucci from './images/whats_gucci.png';
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
        <div>
          <img src={whats_gucci} id="contact_image" alt="whats_gucci" />
        </div>
        <div id="contact">
          <form
            action="mailto:psa395@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <div id="contact_name">
              <input type="text" name="name" placeholder="name" />
            </div>
            <div id="contact_email">
              <input type="text" name="mail" placeholder="email" />
            </div>
            <div id="contact_comment">
              <textarea
                type="text"
                name="comment"
                id="contact_text"
                className="set-width"
              />
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
