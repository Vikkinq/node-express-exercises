const express = require("express");
const morgan = require("morgan");
const AppError = require("./AppError");

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("FIRST SUCCESS");
  next();
});

app.use((req, res, next) => {
  console.log("SECOND SUCCESS");
  next();
});

app.get("/error", (req, res) => {
  taemo.fly();
});

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.get("/dogs", (req, res) => {
  res.send("WOOF");
});

// Auth using Middleware (Function Callcl)
const verifyRole = (req, res, next) => {
  const { role } = req.query;
  if (role === "admin") {
    next();
  } else {
    throw new AppError("You need to be Admin", 403);
  }
};

app.get("/dashboard", verifyRole, (req, res) => {
  res.send("HOME PAGE");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen("3000", () => {
  console.log("✅ Server running at http://localhost:3000");
});
