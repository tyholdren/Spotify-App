import React, { Component } from "react";
import "./App.css";

class Song extends Component {
  render() {
    return (
      <div className="playlist_item">
        <p className="info genre">[ {this.props.genre} ]</p>

        <a href={this.props.songLink}>
          {" "}
          <img
            src={this.props.image}
            alt={"unloaded content"}
            className="songInfo image"
            onClick={this.props.songLink}
          />
        </a>
        <div className="songInfo">
          <div className="songInfo nameGenre">
            <p className="info artistName">{this.props.artistName}</p>
            <p className="info songName">{this.props.songName}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Song;
