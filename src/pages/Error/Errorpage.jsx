import React from "react";
import ErrorIamge from "../../Assets/Img/error.png";
import { Link } from "react-router-dom";
import "./error-page.css";

const Errorpage = () => {
  return (
    <div className="error-content">
      <div className="erroe-content-image">
        <img src={ErrorIamge} alt="error resmi" />
      </div>

      <div className="error-content-text">
        <div>
          <h1>This Page Was Lost</h1>
          <p>
            The Page You are looking for isn’t available. Try to search again or
            use the Go Back button below.
          </p>

          <div className="error-text-button">
            <Link to={"/homepage"} className="errorpage-home-link">
                <i className="fa-solid fa-circle-arrow-left button-icons"></i>Go
                Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
