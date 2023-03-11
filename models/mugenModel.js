const mongoose = require("mongoose")

const movieMugenSchema = mongoose.Schema(
  {
    title: { type: String, requiered: true },
    posters: { type: String, requiered: true },
    movies: { type: String, requiered: true },
  }
)

module.exports = new mongoose.model("MovieMugen", movieMugenSchema);