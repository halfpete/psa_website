import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import website_name from './images/websitename2.png';
import whats_gucci from './images/whats_gucci.png';
import './App.css';
//https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server#how

class Contact extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Link to="/">
          <img src={website_name} id="name_header" alt="title" />
        </Link>
        <div>
          <a href="https://www.instagram.com/psahns/">
            <i className="fa fa-instagram" id="instagram" />
          </a>
        </div>
        <div className="page_links">
          <Link to="/work" id="first_sub_header">
            Work
          </Link>
          <Link to="/about" id="second_sub_header">
            About
          </Link>
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
