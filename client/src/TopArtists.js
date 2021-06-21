import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';
import Artist from './Artist';

const spotifyWebApi = new Spotify();

class TopArtists extends Component {
  constructor() {
    super()

    this.state = {
      show: false,
      artists: [],
    };
    this.getTopArtists = this.getTopArtists.bind(this)
  }

  getTopArtists() {
    spotifyWebApi.getMyTopArtists({ limit: 5 })
      .then((response) => {
        const artistsArray = [];
        for (let i = 0; i < response.items.length; i++) {
          artistsArray.push(response.items[i].name);
        }
        this.setState({
          show: !this.state.show,
          artists: [...artistsArray]
        })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopArtists} className="infoButtons">See My Top Artists</button>
        <div className="artistsContainer">
          {this.state.show && this.state.artists.map((artistName, i) => {
            return <Artist key={[i]} name={artistName} />
          })}
        </div>
      </div>
    )
  }
}
export default TopArtists;
