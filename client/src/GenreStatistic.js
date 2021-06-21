import React, { Component } from "react";
import "./App.css";

class GenreStatistic extends Component {
  render() {
    return (
      <div>
        <p>{this.props.percentage}</p>
      </div>
    );
  }
}

export default GenreStatistic;
