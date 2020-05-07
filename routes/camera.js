const { Router } = require("express");
const { db, update } = require("./../db");

const router = new Router();

// Turn camera ON or OFF
router.get("/:id/:state", async (req, res) => {
  let id = req.params.id;
  let state = req.params.state === "on" ? true : false;

  db.get("devices").find({ id: id }).assign({ on: state }).write();
  update();

  res.send({ msg: `Camera ${id} is now ${req.params.state}` });
});

module.exports = router;
