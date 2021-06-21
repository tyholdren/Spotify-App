import React, { Component } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";
import SubGenreItem from "./SubGenreItem";

const spotifyWebApi = new Spotify();

class SubGenres extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      subGenres: [],
    };
    this.getSubGenres = this.getSubGenres.bind(this);
  }

  getSubGenres() {
    spotifyWebApi.getMyTopArtists({ limit: 50 }).then((response) => {
      let genresArray = [];
      for (let i = 0; i < response.items.length; i++) {
        genresArray = genresArray.concat(response.items[i].genres);
      }

      const matchToGenre = (array1, array2) => {
        const obj = {};
        array1.forEach((e) => (obj[e] = []));
        const merged = (string) => string.replace(/[^\w]/g, "");

        for (let i = 0; i < array1.length; i++) {
          let genre = merged(array1[i]);
          for (let k = 0; k < array2.length; k++) {
            let subGenre = merged(array2[k]);
            if (subGenre.indexOf(genre) !== -1) {
              obj[array1[i]].push(array2[k]);
            }
          }
        }
        return obj;
      };

      const presetGenres = [
        "rock",
        "rap",
        "hip hop",
        "jazz",
        "country",
        "emo",
        "folk",
        "indie",
        "r&b",
        "funk",
        "soul",
        "beats",
        "psychedelic",
        "grunge",
      ];

      const subGenreArray = matchToGenre(presetGenres, genresArray);

      this.setState({
        show: !this.state.show,
        subGenres: subGenreArray,
      });
      console.log(Object.entries(this.state.subGenres)[0][1]);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.getSubGenres} className="infoButtons">
          See My Subgenres
        </button>
        <div>
          {this.state.show &&
            Object.entries(this.state.subGenres).map((genre, index) => {
              genre[1] = genre[1]
                .filter((e, i) => genre[1].indexOf(e) === i)
                .map((element) => {
                  return ` ${element}`;
                });
              if (genre[1].length === 0) genre[1] = "none";
              return (
                <SubGenreItem key={index} genre={`${genre[0]}: ${genre[1]}`} />
              );
            })}
        </div>
      </div>
    );
  }
}
export default SubGenres;
