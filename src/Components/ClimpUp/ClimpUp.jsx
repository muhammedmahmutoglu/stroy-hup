import React, { useRef } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./climp-up.css";

const ClimpUp = () => {
  const btnRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    if (btnRef.current) {
      if (window.scrollY < 10) {
        btnRef.current.classList.remove("climp-item-active");
      } else if (window.scrollY > 100) {
        btnRef.current.classList.add("climp-item-active");
      }
    }
  });

  return (
    <div ref={btnRef} onClick={scrollToTop}>
      <FaArrowCircleUp className="climp-item" />;
    </div>
  );
};

export default ClimpUp;
