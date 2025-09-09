const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

// All Static Files like .css and .js will be here
app.use(express.static(path.join(__dirname, "public")));

// Route for EJS files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { rand: num });
});

// Subreddit Demo
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  res.render("subreddit", { ...data });
});

app.get("/dogs", (req, res) => {
  const dogNames = ["Tanya", "Shadow", "Moose", "Choco", "Bugnot"];
  res.render("dogs", { dogNames });
});

app.listen("3000", () => {
  console.log("Server Started: 3000");
});
