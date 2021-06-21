import React, { Component } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";
import GenreStatistic from "./GenreStatistic";

const spotifyWebApi = new Spotify();

class Percentages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      percentages: [],
    };
  }

  getPercentages() {
    spotifyWebApi.getMyTopArtists({ limit: 100 }).then((response) => {
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

      const genreBreakdown = (array1, array2) => {
        let genresObj = matchToGenre(array1, array2);
        let total = 0;

        for (const key in genresObj) {
          total += genresObj[key].length;
        }
        for (const key in genresObj) {
          genresObj[key] = ((genresObj[key].length / total) * 100).toFixed(2);
        }
        return genresObj;
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

      const percentagesObj = genreBreakdown(presetGenres, genresArray);

      this.setState({
        show: !this.state.show,
        percentages: percentagesObj,
      });
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.getPercentages()} className="infoButtons">
          See My Genre Composition
        </button>
        <div>
          {this.state.show &&
            Object.entries(this.state.percentages).map((entry, index) => {
              return (
                <GenreStatistic
                  key={index}
                  percentage={`${entry[0]}: ${entry[1]} %`}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Percentages;
