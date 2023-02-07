// HOKUS POKUS
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Çalıştı" });
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
