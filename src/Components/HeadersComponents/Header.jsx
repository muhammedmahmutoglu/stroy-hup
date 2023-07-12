import React, { useRef, useState } from "react";
import HeaderLogo from "../../Assets/Img/logo.png";
import SearchLogo from "../../Assets/Icons/search-interface-symbol.png";
import "./Header.css";
import Hamburger from "./hamburger-menu/Hamburger";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const setActiveClass = (linkPath) => {
    if(linkPath === pathname) {
      return "active"
    }
  }

  const headerref = useRef(null);

  window.addEventListener("scroll", () => {
    if (headerref.current) {
      if (window.scrollY < 49) {
        headerref.current.classList.remove("header-scroll");
      } else if (window.scrollY > 50) {
        headerref.current.classList.add("header-scroll");
      }
    }
  });

  return (
    <div className={`header ${props.type && props.type} `} ref={headerref}>
      <div onClick={openMenu} className="header-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to={"/homepage"}>
        <img className="header-logo" src={HeaderLogo} alt=" sayfanın logosu" />
      </Link>
      <div className="header-contents">
        <div className="header-components">
          <Link
            to={"/homepage"}
            className={`header-link ${setActiveClass("/homepage")} ${setActiveClass("/")} `}
          >
            Home
          </Link>

          <Link
            to={"/aboutpage"}
            className={`header-link ${setActiveClass("/aboutpage")}`}
          >
            About
          </Link>

          <Link
            to={"/contactpage"}
            className={`header-link ${setActiveClass("/contactpage")}`}
          >
            Contact
          </Link>

          <Link
            to={"/errorpage"}
            className={`header-link ${setActiveClass("/errorpage")}`}
          >
            404 Page
          </Link>
        </div>
        <img className="search-logo" src={SearchLogo} alt="" />
      </div>

      {isMenuOpen && <Hamburger closeMenu={closeMenu} />}
    </div>
  );
};

export default Header;
