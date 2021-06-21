import React, { Component } from "react";
import "./App.css";
import SearchButtons from "./SearchButtons";

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Create Your Playlist"
          onChange={this.handleChangeSearch}
          className="searchbar"
        />
        <SearchButtons text={this.state.search} />
      </div>
    );
  }
}

export default Searchbar;
