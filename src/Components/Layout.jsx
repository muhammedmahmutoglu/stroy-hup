import React from "react";
import Header from "./HeadersComponents/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Header type={props.headertype} />
      <div className="main-area">{props.children}</div>
      <Footer type={props.erroertype}/>
    </>
  );
};

export default Layout;
