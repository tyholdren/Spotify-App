import React, { Component } from 'react';
import './App.css';

class SubGenreItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.genre}</p>
      </div>
    )
  }
}
export default SubGenreItem;