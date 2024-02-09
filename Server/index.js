const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
// const path = require('path');
const userPage = require("./routes/userpage_route");
const paymentPage = require("./routes/paymentpage_route");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Link validation middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the visual world");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
