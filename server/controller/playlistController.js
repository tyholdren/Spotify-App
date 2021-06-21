const Playlist = require("../model/playlist-model");
const spotifyApi = require("../Spotify");

const playlistController = {};

playlistController.addSong = async (req, res) => {
  try {
    const query = `genre:${req.query.term}`;
    const spotifySearch = await spotifyApi.search(query, ["track"], {
      limit: 50,
    });
    const random = Math.floor(Math.random() * 50);
    const songLink =
      spotifySearch.body.tracks.items[random].external_urls.spotify;
    const image = spotifySearch.body.tracks.items[random].album.images[0].url;
    const artistName = spotifySearch.body.tracks.items[random].artists[0].name;
    const songName = spotifySearch.body.tracks.items[random].name;
    const genre = req.query.term;

    const song = {
      artistName: artistName,
      songName: songName,
      image: image,
      songLink: songLink,
      genre: genre,
    };

    let document = await Playlist.findOne({});
    if (!document) {
      document = await Playlist.create({ songArray: [] });
    }
    document.songArray.push(song);
    await document.save();
    res.status(200).json({ message: "Added new song", document });
  } catch (error) {
    console.log("Error occurred when adding song:", error);
    res.status(500).end();
  }
};

playlistController.getSong = async (req, res) => {
  try {
    const document = await Playlist.findOne({});
    res.status(200).json({ message: "Retrieved Playlist", document });
  } catch (error) {
    console.log("Error occurred when getting song:", error);
    res.status(500).end();
  }
};

playlistController.updateSong = async (req, res) => {
  try {
    const query = `genre:${req.query.term}`;
    const spotifySearch = await spotifyApi.search(query, ["track"], {
      limit: 50,
    });

    const random = Math.floor(Math.random() * 50);
    const songLink =
      spotifySearch.body.tracks.items[random].external_urls.spotify;
    const image = spotifySearch.body.tracks.items[random].album.images[0].url;
    const artistName = spotifySearch.body.tracks.items[random].artists[0].name;
    const songName = spotifySearch.body.tracks.items[random].name;
    const genre = req.query.term;

    const newSong = {
      artistName: artistName,
      songName: songName,
      image: image,
      songLink: songLink,
      genre: genre,
    };
    const document = await Playlist.findOne({});
    const index = document.songArray.findIndex(
      (element) => element.genre === req.query.term
    );
    document.songArray[index] = newSong;
    await document.save();
    res.status(200).json({ message: "Updated song", document });
  } catch (error) {
    console.log("Error occurred when updating song:", error);
    res.status(500).end();
  }
};

playlistController.deleteSong = async (req, res) => {
  try {
    const document = await Playlist.findOne({});
    const index = document.songArray.findIndex(
      (element) => element.artistName === req.query.term
    );
    if (index !== -1) {
      document.songArray.splice(index, 1);
      await document.save();
      res.status(200).json({ message: "Deleted song", document });
    } else {
      console.log("Artist not found");
      res.status(500).end();
    }
  } catch (error) {
    console.log("Error occured when deleting song", error);
    res.status(500).end();
  }
};

playlistController.clearPlaylist = async (req, res) => {
  try {
    const document = await Playlist.findOne({});
    document.songArray = [];
    await document.save();
    res.status(200).json({ message: "Playlist cleared", document });
  } catch (error) {
    console.log("Error occured when clearing playlist", error);
    res.status(500).end();
  }
};

module.exports = playlistController;
