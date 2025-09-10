const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const comments = [
  {
    id: uuid(),
    username: "Broskie",
    comment: "Lol wtf you are a piece of sht",
  },
  {
    id: uuid(),
    username: "Herald",
    comment: "Faker is the GOAT",
  },
  {
    id: uuid(),
    username: "Artemis",
    comment: "Yessir, I am so Handsome",
  },
  {
    id: uuid(),
    username: "Gab",
    comment: "I Love Jav, Everyday Javing to Javers",
  },
];

// Read Comment
app.get("/comments", (req, res) => {
  res.render("comments/facebol", { comments });
});

// Read New Comment
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

// Create Comment using POST that sends data to the Database or Array
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

// GET then Go EDIT HTML
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

//PATCH then UPDATE
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const Fcomment = comments.find((c) => c.id === id);
  const newComment = req.body.comment;

  if (Fcomment) {
    Fcomment.comment = newComment;
    res.redirect(`/comments`);
  } else {
    res.send("Comment not Found");
  }
});

// Using URL Encoded Format for PATCH
// app.patch("/comments/:id", (req, res) => {
//   const { id } = req.params;
//   const newComment = req.body.comment;
//   const fComment = comments.find((c) => c.id === id);
//   fComment.comment = newComment;
//   res.redirect("/comments");
// });

//DELETE or Remove using Filter
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

// DELETE or Remove using Splice
// app.delete("/comments/:id", (req, res) => {
//   const { id } = req.params;
//   const commentIndex = comments.findIndex((c) => c.id === id);

//   if (commentIndex !== -1) {
//     comments.splice(commentIndex, 1); // remove by index
//     res.redirect("/comments");
//   } else {
//     res.send("Comment not found");
//   }
// });

app.listen(3000, () => {
  console.log("Server Starting: 3000");
});
