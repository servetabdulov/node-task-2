const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Abdulov Servet");
});
app.get("/card", function (req, res) {
  res.send("Bu route kartlar üçün cavabdehdir");
});
app.get("/client", function (req, res) {
  res.send("Bu marşrut müştərilər üçün cavabdehdir");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
