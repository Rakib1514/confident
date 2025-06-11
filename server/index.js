const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');

const port = process.env.PORT;
const app = express();

app.get("/", async (req, res) => {
  res.send("CONFIDENT SERVER IS RUNNING");
});

app.listen(port);
