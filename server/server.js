const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

var dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");

const spotifyApi = require("./Spotify");

const playlistRouter = require("./routes/playlist");

const main = async () => {
  app.use(express.json());
  app.use("/", playlistRouter);

  const credentials = await spotifyApi.clientCredentialsGrant();
  spotifyApi.setAccessToken(credentials.body.access_token);

  await mongoose.connect(process.env.mongo_link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
};
main();

module.exports = app;
