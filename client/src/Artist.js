import React, { Component } from "react";
import "./App.css";

class Artist extends Component {
  render() {
    return (
      <div>
        <p className="artist">{this.props.name}</p>
      </div>
    );
  }
}
export default Artist;
