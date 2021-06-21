import React, { Component } from "react";
import "./App.css";

class Genre extends Component {
  render() {
    return (
      <div>
        <p>{this.props.genre}</p>
      </div>
    );
  }
}
export default Genre;
