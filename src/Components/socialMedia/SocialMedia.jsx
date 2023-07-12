import React, { Component } from "react";
import "./SocialMedia.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default class SocialMedia extends Component {
  render() {
    return (
      <div className="icons">
        <FaFacebookSquare className="icon" />
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        {this.props.page === "about" ? <FaLinkedin className="icon" /> : <FaGithub className="icon" />}
      </div>
    );
  }
}
