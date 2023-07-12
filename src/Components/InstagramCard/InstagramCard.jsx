import React, { Component } from "react";
import { FaComments, FaHeart, FaInstagram } from "react-icons/fa";
import instaCards from "../../Mocks/instagramCard.json";

import "./instagram-card.css";

export default class InstagramCard extends Component {
  render() {
    return (
      <div className="instagram-cards">
        <div className="instagram-cards-title">
          <p>
            <FaInstagram className="instagram-icon" /> Me On Instagram
          </p>
        </div>

        <div className="instagram-items">
          {instaCards.cards.map((image, index) => (
            <div className="instagram-image" key={index}>
              <img
                src={image}
                alt="instagram içerikleri"
                className="instagram-image-items"
              />
              <div className="image-background">
                <FaHeart className="image-background-icon" />
                <span className="image-background-icon">9</span>
              </div>
              <div className="image-background image-bacground-animasyon">
                <FaComments className="image-background-icon " />
                <span className="image-background-icon">1</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
