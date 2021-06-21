import React, { Component } from 'react';
import './App.css';
import Recommendation from './Recommendation'
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

class TrackRecs extends Component {
  constructor() {
    super()
    this.state = {};
  }

  //find a track or artist based on a given genre
  //https://github.com/JMPerez/spotify-web-api-js/blob/master/src/spotify-web-api.js

  //https://developer.spotify.com/documentation/web-api/reference/#endpoint-search

  //example of search
  //https://developer.spotify.com/console/get-search-item/?q=tania+bowra&type=artist

  getTrackRecs() {

    spotifyWebApi.getMyTopArtists()
      .then((response) => {

        const presetGenres = ['rock', 'rap', 'hip hop', 'jazz', 'country', 'emo', 'folk', 'indie', 'r&b', 'funk', 'soul', 'beats', 'psychedelic', 'grunge']

        let genresArray = [];
        for (let i = 0; i < response.items.length; i++) {
          genresArray = genresArray.concat(response.items[i].genres);
        }

        const matchToGenre = (array1, array2) => {
          const obj = {};
          array1.forEach(e => obj[e] = []);
          const merged = string => string.replace(/[^\w]/g, '');

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
            genresObj[key] = (genresObj[key].length / total * 100).toFixed(2);
          }
          return genresObj;
        };

        const percentagesObj = genreBreakdown(presetGenres, genresArray)

        const getLowestThreeGenres = (object) => {

          return Object.keys(object)
            .sort((a, b) => object[a] - object[b])
            .slice(0, 3);
        };

        const getTracks = genre => {
          const query = `genre:${genre}`
          spotifyWebApi.search(query, ['track'], { limit: 50 })
            .then((response) => {
              console.log('tyler', response);
              const random = Math.floor(Math.random() * 50)

              console.log('song link:', response.tracks.items[random].external_urls.spotify)
              const trackLink = response.tracks.items[random].external_urls.spotify

              console.log('artist image:', response.tracks.items[random].album.images[0].url)
              const image = response.tracks.items[random].album.images[0].url

              console.log('artist name:', response.tracks.items[random].artists[0].name)
              const artistName = response.tracks.items[random].artists[0].name

              console.log('song name:', response.tracks.items[random].name)
              const trackName = response.tracks.items[random].name

              this.setState({
                image: image,
                track: trackName,
                artistName: artistName,
                trackLink: trackLink,
              });
              console.log(this.state);
            })
        }

        const lowestGenres = getLowestThreeGenres(percentagesObj);
        const randomIndex = Math.floor(Math.random() * 3)
        const randomGenre = (lowestGenres[randomIndex]);
        getTracks(randomGenre)
      }
      )
  }

  render() {
    return (
      <div>
        {/* <button onClick={() => this.getTrackRecs()}>Get Tracks</button> */}
        {/* <div>
          <Recommendation
            image={this.state.image}
            track={this.state.track}
            artistName={this.state.artistName}
            trackLink={this.state.trackLink}
          />
        </div> */}
      </div >
    )
  }

}
export default TrackRecs;
