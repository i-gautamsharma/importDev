const express = require("express");
const app = express();
require('dotenv').config();
const connectDB = require("./utils/connectDB")
const manageAuth = require("./routes/manageAuth")
const managePosts = require("./routes/managePosts")

app.use(express.json());
const PORT = 4000;

connectDB();

app.get("/", (req, res) => {
  res.send("hello mf ");
});

app.use("/auth", manageAuth);
app.use("/posts", managePosts);

app.listen(PORT, () => console.log("Server Listing on PORT " + PORT));
