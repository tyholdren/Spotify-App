import React, { Component } from 'react';
import './App.css';
import Playlist from './Playlist';

class SearchButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      songs: [],
    }
    this.handleViewPlaylistButtonClick = this.handleViewPlaylistButtonClick.bind(this);
    this.handleAddSongButtonClick = this.handleAddSongButtonClick.bind(this);
    this.handleUpdateSongButtonClick = this.handleUpdateSongButtonClick.bind(this);
    this.handleDeleteSongButtonClick = this.handleDeleteSongButtonClick.bind(this);
    this.handleClearPlaylistButtonClick = this.handleClearPlaylistButtonClick.bind(this);
  }

  handleViewPlaylistButtonClick() {
    const url = 'http://localhost:5000/?term=' + this.props.text;
    fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        const songsArray = []
        for (let i = 0; i < data.document.songArray.length; i++) {
          songsArray.push(data.document.songArray[i])
        }
        this.setState({
          songs: [...songsArray]
        })
      })
      .catch(error => console.log(error))
  }

  handleAddSongButtonClick() {
    const url = 'http://localhost:5000/?term=' + this.props.text;
    fetch(url, {
      method: 'POST',
      headers: { 'Accept': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        const songsArray = []
        for (let i = 0; i < data.document.songArray.length; i++) {
          songsArray.push(data.document.songArray[i])
        }
        this.setState({
          songs: [...songsArray]
        })
      })
      .catch(error => console.log(error))
  }

  handleUpdateSongButtonClick() {
    const url = 'http://localhost:5000/?term=' + this.props.text;
    fetch(url, {
      method: 'PUT',
      headers: { 'Accept': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        const songsArray = []
        for (let i = 0; i < data.document.songArray.length; i++) {
          songsArray.push(data.document.songArray[i])
        }
        this.setState({
          songs: [...songsArray]
        })
      })
      .catch(error => console.log(error))
  }

  handleDeleteSongButtonClick() {
    const url = 'http://localhost:5000/?term=' + this.props.text;
    fetch(url, {
      method: 'DELETE',
      headers: { 'Accept': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        const songsArray = []
        for (let i = 0; i < data.document.songArray.length; i++) {
          songsArray.push(data.document.songArray[i])
        }
        this.setState({
          songs: [...songsArray]
        })
      })
      .catch(error => console.log(error))
  }

  handleClearPlaylistButtonClick() {
    const url = 'http://localhost:5000/clear'
    fetch(url, {
      method: 'DELETE',
      headers: { 'Accept': 'application/json' }
    })
      .then(response => response.json())
      .then(data => {
        data = [];
        this.setState({
          songs: []
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="buttonsContainer">
        {/* <div> */}
        <button onClick={this.handleViewPlaylistButtonClick}>View Playlist</button>
        <button onClick={this.handleAddSongButtonClick}>Add Genre</button>
        <button onClick={this.handleUpdateSongButtonClick}>Update Genre</button>
        <button onClick={this.handleDeleteSongButtonClick}>Delete Artist</button>
        <button onClick={this.handleClearPlaylistButtonClick}>Clear Playlist</button>
        {/* </div>
        <div> */}
        <Playlist songs={this.state.songs} />
        {/* </div> */}
      </div>
    )
  }
}

export default SearchButtons;