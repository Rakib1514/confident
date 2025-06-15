const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
require("dotenv").config();

// Require routes
const authRoute = require("./src/routes/authRoute");
const userRoute = require("./src/routes/userRoute");

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/auth", authRoute);
app.use("/api/user", userRoute);

app.get("/", async (req, res) => {
  res.send("CONFIDENT SERVER IS RUNNING");
});

app.listen(port);
