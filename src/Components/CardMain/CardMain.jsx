import React, { Component } from "react";
import "./card-main.css";

export default class CardMain extends Component {
  render() {
    return (
      <div className="main-card">
        <div className="card-image">
        <img className="card-image-item" src={this.props.imageUrl} alt="cartın resimleri" />
        </div>
        <div className="main-card-response">
          <div className="card-date">
            <h1>22</h1>
            <p>APR</p>
          </div>
          <div className="card-main_content">
            <h1>{this.props.title}</h1>
            <p> {this.props.content} </p>
            <div className="card-tags">
              {this.props.tags.map((tag, index) => (
                <a key={index} href="#">
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
