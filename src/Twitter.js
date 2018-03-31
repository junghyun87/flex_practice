import React, { Component } from 'react';
import './Twitter.css';

class Twitter extends Component {
  render() {
    return (
      <div>
        <ul className="twitter">
          <li className="twitter">
            <i className="fas fa-home" /> Home
          </li>
          <li className="twitter">
            <i className="far fa-bell" /> Notification
          </li>
          <li className="twitter">
            <i className="far fa-envelope" /> Messages
          </li>
          <li className="twitter">
            <i className="fab fa-twitter" />
          </li>
          <li className="twitter">Search bar</li>
          <li className="twitter">Profile</li>
          <li className="twitter">Tweet</li>
        </ul>
      </div>
    );
  }
}

export default Twitter;
