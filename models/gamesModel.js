const mongoose = require('mongoose')

// SCHEMA MAKING FOR DB
const Schema = mongoose.Schema

const favGamesSchema = new Schema({
  userName: String,
  titleGame1: String,
  date: {
    type: String,
    default: Date.now()
  }
})

module.exports = mongoose.model('gamesModel', favGamesSchema)
