const { Router } = require("express");
const fs = require("fs");

const router = new Router();

router.get("/:id/stream", (req, res) => {
  // Create stream from mp3
  const src = fs.createReadStream("./db/audio/testfile.mp3");

  // Stream to frontend
  src.pipe(res);
});

module.exports = router;
