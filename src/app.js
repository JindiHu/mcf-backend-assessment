const express = require("express");
const cities = require("../data/cities");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/v1/cities", (req, res) => {
  res.json({});
});

module.exports = app;
