const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/todo-route");

const app = express();
const PORT = 5000;
const URL = "mongodb://0.0.0.0:27017/todobox";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(router);

mongoose
  .connect(URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err.message));

app.listen(PORT, (err) => {
  err ? console.log(err.message) : console.log(`Listening to port: ${PORT}`);
});
