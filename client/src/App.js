import React, { Component } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";
import TopArtists from "./TopArtists";
import Genres from "./Genres";
import TrackRecs from "./TrackRecs";
import Percentages from "./Percentages";
import SubGenres from "./SubGenres";
import SearchBar from "./SearchBar";

const spotifyWebApi = new Spotify();

class App extends Component {
  constructor() {
    super();

    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: {
        name: "Not Checked",
        image: "",
      },
    };
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }
  }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  render() {
    return (
      <div className="App">
        <div className="columnOne">
          <div className="loginContainer">
            <a href="http://localhost:8888" className="loginButton">
              <button>Login With Spotify</button>
            </a>
          </div>
          <hr className="description"></hr>
          <p className="description">
            Spotify does a great job at recommending music based on a user's
            liked tracks, but oftentimes users favor one or two genres. What if
            you could see your top artists, genres, and get a breakdown
            detailing the percentage of each genre you listen to? Now you can!
            Log in with Spotify, get your stats and create a playlist of genres
            you typically don't listen to.
          </p>
          <p className="description">
            1. Add to your playlist by placing one of your least listened to
            genres in the searchbar ( i.e. 'rap', 'country', etc ) <br></br>
            2. Update your playlist by placing in a genre in the searchbar and
            clicking 'Update Genre'. This will update the first song in your
            playlist with that genre name<br></br>
            3. Delete a track by placing the name of the artist in the searchbar
            and clicking 'Delete Artist'<br></br>
            4. Lastly hover over the image of a song and click to listen to each
            track!
          </p>
          <p className="description">
            Now you're becoming a well-rounded music listener!
          </p>
        </div>
        <div className="columnTwo"></div>
        <div className="getInfo">
          <div className="infoSection">
            <p className="numberedList">.001</p>
            <TopArtists className="topArists" />
          </div>
          <div className="infoSection">
            <p className="numberedList">.002</p>
            <Genres className="genres" />
          </div>
          <div className="infoSection">
            <p className="numberedList">.003</p>
            <SubGenres className="subgenres" />
          </div>
          <div className="infoSection">
            <p className="numberedList">.004</p>
            <Percentages className="percentages" />
          </div>
        </div>

        <div className="playlist">
          <p className="sectionHeading">My Playlist</p>
          <SearchBar />
        </div>
      </div>
    );
  }
}
export default App;
