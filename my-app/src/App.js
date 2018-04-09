import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fauna from './images/fauna.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/home">
          <img src={fauna} alt="fauna" />
        </Link>
      </div>
    );
  }
}

export default App;
