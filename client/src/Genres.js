import React, { Component } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";
import Genre from "./Genre";

const spotifyWebApi = new Spotify();

class Genres extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      genres: [],
    };
    this.getTopGenres = this.getTopGenres.bind(this);
  }

  getTopGenres() {
    spotifyWebApi.getMyTopArtists({ limit: 3 }).then((response) => {
      let genresArray = [];
      for (let i = 0; i < response.items.length; i++) {
        genresArray = genresArray.concat(response.items[i].genres);
      }
      this.setState({
        show: !this.state.show,
        genres: [...genresArray],
      });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopGenres} className="infoButtons">
          See My Top Genres
        </button>
        <div>
          {this.state.show &&
            this.state.genres.map((genre, i) => {
              return <Genre key={[i]} genre={genre} />;
            })}
        </div>
      </div>
    );
  }
}
export default Genres;
