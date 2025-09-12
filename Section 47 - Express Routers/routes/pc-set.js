const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("all PC Sets");
});

module.exports = router;
