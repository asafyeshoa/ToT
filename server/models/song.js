const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
    {
        songName: {type: String},
        band: {type: String},
        year: {type: String}
    },
    {
        timestamps: true
    }
);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
