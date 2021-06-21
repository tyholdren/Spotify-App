import React, { Component } from "react";
import "./App.css";

class Recommendation extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt={""} />
        <p>{`${this.props.artistName} : ${this.props.track}`} </p>
        <a href={this.props.trackLink}>{"Listen"}</a>
      </div>
    );
  }
}
export default Recommendation;
