const express = require("express");

const app = express();

// app.use((req, res) => {
//   console.log("NEW");
//   res.send("HELLO WORLD");
// });

app.get("/dogs", (req, res) => {
  res.send("WOOOOOOFFFFF!");
});

app.get("/dogsName/:name", (req, res) => {
  res.send(`Dog name is: ${req.params.name}`);
});

app.get("/dogs/:breeds", (req, res) => {
  const { breeds } = req.params;
  res.send(`DOG BREED: ${breeds}`);
});

app.get("/cats", (req, res) => {
  res.send("MEOOOOWWW!");
});

app.use((req, res) => {
  res.send("NOT FOUND PATH");
});

app.listen(8080, () => {
  console.log("localhost:8080");
  console.log("SERVER STARTED!");
});
