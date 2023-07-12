import React, { Component } from "react";
import Monisa from "../../Assets/Img/author.jpg";
import "./Comments.css";

export default class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <img className="comments-monisa" src={Monisa} alt="profil fotoğrafı" />
        <div className="comments-text">
          <h1>Hey! I’m <span>Monnisa</span> </h1>
          <p>
            Breakfast procuring no end happiness allowance assurance frank. Met
            simplicity nor difficulty unreserved who. Entreaties mr conviction
            dissimilar me astonished estimating cultivated.
          </p>
        </div>
      </div>
    );
  }
}
