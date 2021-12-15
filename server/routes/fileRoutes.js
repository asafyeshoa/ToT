const router = require("express").Router();
const fs = require("fs");
const Song = require('../models/song.js')
const e = require("express");

router.get("/readAndSend", (req, res) => {

    try {
        const data = fs
            .readFileSync("songList.csv")
            .toString()
            .toLocaleLowerCase()
            .split("\n")
            .map((e) => e.trim())
            .map((e) => e.split(",").map((e) => e.trim()));

        data.shift()
        data.forEach((row) => {
            Song.create({
                songName: row[0],
                band: row[1],
                year: row[2]
            })
        })

        res.send(data)

    } catch (err) {
        res.send({
            code: 500,
            success: false,
            message: err.message
        })
    }


});

module.exports = router;
