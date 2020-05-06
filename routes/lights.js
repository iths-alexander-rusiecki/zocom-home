const { Router } = require("express");
const { db, update } = require("./../db");

const router = new Router();

router.get("/:id/:state", (req, res) => {
  const id = req.params.id;
  const state = req.params.state === "on" ? true : false;

  db.get("devices").find({ id: id }).assign({ on: state }).write();
  update();

  res.send({ msg: `Light ${id} is now ${req.params.state}` });
});

module.exports = router;
