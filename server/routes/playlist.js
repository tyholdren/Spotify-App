const express = require("express");

const playlistController = require("../controller/playlistController");

const router = express.Router();

router.post("/", playlistController.addSong);
router.get("/", playlistController.getSong);
router.put("/", playlistController.updateSong);
router.delete("/", playlistController.deleteSong);
router.delete("/clear", playlistController.clearPlaylist);

module.exports = router;
