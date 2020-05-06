const { Router } = require("express");
const { db, update } = require("./../db");

const router = new Router();

// Turn light ON or OFF
router.get("/:id/:state", (req, res) => {
  const id = req.params.id;
  const state = req.params.state === "on" ? true : false;

  db.get("devices").find({ id: id }).assign({ on: state }).write();
  update();

  res.send({ msg: `Light ${id} is now ${req.params.state}` });
});

// Change light color
router.get("/:id/color/:value", (req, res) => {
  const id = req.params.id;
  const color = `#${req.params.value}`;

  db.get("devices").find({ id: id }).assign({ color: color }).write();
  update();

  res.send({ msg: `Light ${id} is now HEX color ${color}` });
});

module.exports = router;
