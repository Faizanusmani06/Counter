const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors());

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const Counter = require("./routes/Counter");

//mount the todo API routes
app.use("/api/v1", Counter);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});
//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE </h1>`);
});
