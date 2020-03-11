const mongoose = require('mongoose')

// SCHEMA MAKING FOR DB
const Schema = mongoose.Schema

const favGamesSchema = new Schema({
  userName: String,
  titleGame1: String,
  titleGame2: String,
  titleGame3: String,
  date: {
    type: String,
    default: Date.now()
  }
})

// MODEL
// const favGames = mongoose.model('FavGames', favGamesSchema)

module.exports = mongoose.model('gamesModel', favGamesSchema)