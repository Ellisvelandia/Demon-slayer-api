const router = require("express").Router();
const movieModel = require("../models/districModel");

router.post("/addDistricMovie", async (req, res) => {
  try {
    const newMovieDistric = new movieModel(req.body);
    await newMovieDistric.save().then(() => {
      res.status(200).json({ message: "Distric Movie Added Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

// GET

router.get("/getMovieDistric", async (req, res) => {
  let movie;
  try {
    movie = await movieModel.find();
    res.status(200).json({ movie });
  } catch (error) {
    console.log(error);
  }
});

//GET REQ WITH  ID
router.get("/getMovieDistric/:id", async (req, res) => {
  let movie;
  const id = req.params.id;
  try {
    movie = await movieModel.findById(id);
    res.status(200).json({ movie });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE Episode BY ID

router.put("/updateMovieDistric/:id", async (req, res) => {
  const id = req.params.id;
  const { title, posters, movies } = req.body;
  let movie;
  try {
    movie = await movieModel.findByIdAndUpdate(id, {
      title,
      posters,
      movies,
    });
    movie = await movie.save().then(() => res.json({ message: "Data Update" }));
  } catch (error) {
    console.log(error);
  }
});

//Delete episode BY id
router.delete("/deleteMovieDistric/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await movieModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "Delete Successfully" }));
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
