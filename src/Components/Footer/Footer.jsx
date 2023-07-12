import React, { Component } from 'react'
import "./footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div className={`footer ${this.props.type && this.props.type}`}>
        <p>Copyright © 2023 RedQ, Inc.</p>
      </div>
    )
  }
}
