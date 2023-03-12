const mongoose = require("mongoose");

const movieDistricSchema = mongoose.Schema({
  title: { type: String, required: true },
  posters: { type: String, required: true },
  movies: { type: String, required: true },
});

module.exports = new mongoose.model("movieDistric", movieDistricSchema);
