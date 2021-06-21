const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  songArray: [
    {
      artistName: { type: String, required: true },
      songName: { type: String, required: true },
      image: { type: String, required: true },
      songLink: { type: String, required: true },
      genre: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('Playlist', playlistSchema);

