const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

//Import Routes
const postsRoute = require("./routes/posts");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);


//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB!")
);

//Start Listening to Server
app.listen(3000);
