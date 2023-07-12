import React, { Component } from "react";
import HeaderLogo from "../../../Assets/Img/logo.png";
import CloseIcon from "../../../Assets/Icons/close.png";
import "./Hamburger.css";
import { Link } from "react-router-dom";

export default class Hamburger extends Component {
  setActiveClass(pageUrl) {
    if (window.location.pathname === pageUrl) {
      return "active";
    }
  }
  render() {
    return (
      <div className="hamburger">
        <div className="hamburger-menu">
          <div className="hamburger-header">
            <img
              className="hamburger-logo"
              src={HeaderLogo}
              alt="Header logo"
            />
            <img
              className="hamburger-close"
              src={CloseIcon}
              alt="kapatma işareti"
              onClick={this.props.closeMenu}
            />
          </div>
          <ul>
            <li>
              <Link
                to={"/homepage"}
                className={`header-link ${this.setActiveClass("/homepage")} ${this.setActiveClass("/")} `}
                onClick={this.props.closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/aboutpage"}
                className={`menu-link ${this.setActiveClass("/aboutpage")}`}
                onClick={this.props.closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contactpage"}
                className={`menu-link ${this.setActiveClass("/contactpage")}`}
                onClick={this.props.closeMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to={"/errorpage"}
                className={`menu-link ${this.setActiveClass("/errorpage")}`}
                onClick={this.props.closeMenu}
              >
                404 Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
