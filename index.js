const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const movieRoute = require("./routes/movieRoute");
const mugenRoute = require("./routes/mugenRoute");
const districRoute = require("./routes/districRoute");
require("dotenv").config();
require("./connection/conn");

mongoose.set("strictQuery", false);
app.use(cors());
app.use(express.json());

app.use("/Demonslayer/v1", movieRoute);
app.use("/Demonslayer/v1", mugenRoute);
app.use("/Demonslayer/v1", districRoute);

app.listen(3000, () => {
  console.log(`Node API app is running on port 3000`);
});
