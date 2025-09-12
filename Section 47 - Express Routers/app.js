const express = require("express");
const partsRouter = require("./routes/parts");
const setsRouter = require("./routes/pc-set");
const adminRouter = require("./routes/admin");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const sessionOptions = {
  secret: "pitotoykey",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionOptions));

app.use(cookieParser("secretpitotoy"));

app.use("/parts", partsRouter);
app.use("/sets", setsRouter);
app.use("/admin", adminRouter);

// app.use("/greet", (req, res) => {
//   const { name } = req.cookies;
//   res.send(`Hey there, ${name}`);
// });

app.use("/setname", (req, res) => {
  res.cookie("name", "taemopitotoy");
  res.send("Nice one");
});

app.use("/getsign", (req, res) => {
  res.cookie("pisot", "pisotoy", { signed: true });
  res.send("signed your pitosotoy");
});

app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }

  res.send(`You Have Viewed this page ${req.session.count} Times`);
});

app.get("/register", (req, res) => {
  const { username = "pisotoy" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.use("/greet", (req, res) => {
  const { username } = req.session;
  res.send(`Hey there, ${username}`);
});

app.listen("8080", () => {
  console.log("Server Started: localhost:8080");
});
