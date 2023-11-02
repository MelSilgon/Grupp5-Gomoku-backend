const express = require('express')
const router = express.Router()
const emptyData = require('./empty_game.json')
const fullData = require('./full_game.json')
const whiteData = require('./white_game.json')
const blackData = require('./black_game.json')

router.get('/create_game', (req, res) => {
    res.json(emptyData)
})

router.get('/add_player', (req, res) => {
    res.json(emptyData)
})

router.get('/play', (req, res) => {
    res.json(emptyData)
})

// Different games
router.get('/empty', (req, res) => {
    res.json(emptyData);
});

router.get('/full', (req, res) => {
    res.json(fullData);
});

router.get('/white', (req, res) => {
    res.json(whiteData);
});

router.get('/black', (req, res) => {
    res.json(blackData);
});

module.exports = router
