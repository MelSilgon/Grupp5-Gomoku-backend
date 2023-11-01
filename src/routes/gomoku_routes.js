const express = require('express')
const router = express.Router()
const gameData = require('./game.json') // adjust the path if the file is in a different directory

router.get('/create_game', (req, res) => {
    res.json(gameData)
})

router.get('/add_player', (req, res) => {
    res.json(gameData)
})

router.get('/play', (req, res) => {
    res.json(gameData)
})

const players = []

router.get('/player/create', (req, res) => {
    const name = req.query.name

    if (!name) {
        return res.status(400).json({ error: 'Name is required' })
    }

    const player = {
        id: uuid.v4(),
        name: name
    }

    players.push(player)
    res.status(201).json(player)
})

module.exports = router
