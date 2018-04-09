import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import resume from './images/resume.png';
import about_me from './images/about_me.png';

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={about_me} id="about_picture" alt="about_me" />
        </div>
        <div id="about_text">
          Hi, my name is Peter Ahn. I graduated Art Center c/o 2018. I love to
          draw bread.
          <div>
            <a href={resume} target="_blank">
              Resume Available Here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
