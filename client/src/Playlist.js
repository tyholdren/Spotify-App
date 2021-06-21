import React, { Component } from "react";
import "./App.css";
import Song from "./Song";

class Playlist extends Component {
  render() {
    return (
      <div className="middlePlaylistContainer">
        {this.props.songs.map((songObject, index) => {
          return (
            <Song
              key={index}
              artistName={songObject.artistName}
              songName={songObject.songName}
              image={songObject.image}
              songLink={songObject.songLink}
              genre={songObject.genre}
            />
          );
        })}
      </div>
    );
  }
}

export default Playlist;
