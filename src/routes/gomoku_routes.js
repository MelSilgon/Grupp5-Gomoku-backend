const express = require("express")
const router = express.Router()
const gameData = require('./empty_game.json')
const fullData = require('./full_game.json')
const whiteData = require('./white_game.json')
const blackData = require('./black_game.json')

router.get('/create_game', (req, res) => {
    res.json(gameData)
})

router.get('/add_player', (req, res) => {
    res.json(gameData)
})

router.get('/play', (req, res) => {
    res.json(gameData)
})

// Different games

router.get('/full', (req, res) => {
    res.json(fullData);
});

router.get('/white', (req, res) => {
    res.json(whiteData);
});

router.get('/black', (req, res) => {
    res.json(blackData);
});

router.post("/update_game", (req, res) => {
    const updatedGameData = req.body;

    gameData.board.tiles = updatedGameData.board.tiles;
    gameData.player = updatedGameData.player;
    gameData.state = updatedGameData.state;

    res.json(gameData);
  });

module.exports = router;
