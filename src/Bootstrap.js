import React, { Component } from 'react';
import './Bootstrap.css';
import b_logo from './bootstrap.svg';

class Bootstrap extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <img src={b_logo} alt="logo" />
          </li>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
          <li>Visit</li>
        </ul>
      </div>
    );
  }
}

export default Bootstrap;
