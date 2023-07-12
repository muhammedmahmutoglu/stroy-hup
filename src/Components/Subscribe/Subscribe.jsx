import React, { Component } from "react";
import "./subscribe.css";


export default class Subscribe extends Component {
  render() {
    return (
      <div className="subscribes">
        <div className="subscribe-contents">
          <h1>Get The Best Of All Hands Delivered To Your Inbox</h1>
          <p>Subscribe to our newsletter and stay updated.</p>

          <div className="subscribes-mail">
            <input
              type="email"
              placeholder="Write your email here"
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    );
  }
}
