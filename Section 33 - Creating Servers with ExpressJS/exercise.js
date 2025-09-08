const express = require("express");

const app = express();

const products = ["apple", "mango", "pineapple"];

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/intro/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

app.get("/users/:id", (req, res) => {
  res.send(`Viewing user with ID: ${req.params.id}`);
});

app.get("/api/products/:id", (req, res) => {
  const productID = parseInt(req.params.id);
  if (req.params.id === "all") {
    res.send(products.join(", "));
  } else {
    res.send(`Showing Product: ${products[productID]}`);
  }
});

app.get("/shout/:word", (req, res) => {
  const word = req.params.word;
  res.send(`${word.toUpperCase()}!!!`);
});

app.use((req, res) => {
  res.send("NOT FOUND!");
});

app.listen("8080", () => {
  console.log("Server Starting!");
});
