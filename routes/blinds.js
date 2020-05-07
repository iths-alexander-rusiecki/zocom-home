const { Router } = require("express");
const { db, update } = require("./../db");

const router = new Router();

// Turn blind UP or DOWN
router.get("/:id/:state", (req, res) => {
  const id = req.params.id;
  const state = req.params.state === "down" ? true : false;

  db.get("devices").find({ id: id }).assign({ on: state }).write();
  update();

  res.send({ msg: `Blind ${id} is now ${req.params.state}` });
});

module.exports = router;
