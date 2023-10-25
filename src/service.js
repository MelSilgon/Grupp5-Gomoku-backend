const express = require('express')
const app = express()

app.use(express.json())
app.use('/api/gomoku', require('./routes/gomoku_routes.js'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
})
