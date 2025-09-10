const express = require("express");
const app = express();
const path = require("path");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/pitotoy", (req, res) => {
  res.render("getpost");
});

app.post("/pitotoy", (req, res) => {
  const { meat, qty } = req.body;
  res.render("getpost", { qty, meat });
});

app.listen(3000, () => {
  console.log("Server Starting: 3000");
});
