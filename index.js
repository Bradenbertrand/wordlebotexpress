const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 5000
const scoreRoutes = require('./routes/scores')

const CONNECTION_URL = 'mongodb+srv://worthless:VeryDeadHorses@cluster0.nlzra.mongodb.net/WordleLeaderboard?retryWrites=true&w=majority';
const PORT = process.env.port || 5000;
app.use(cors())
app.use('/', scoreRoutes)

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));