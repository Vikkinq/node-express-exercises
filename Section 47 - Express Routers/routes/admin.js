const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("You are not admin");
});

router.get("/dashboard", (req, res) => {
  res.send("admin dashboard");
});

module.exports = router;
