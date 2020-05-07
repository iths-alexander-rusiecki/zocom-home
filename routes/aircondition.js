const { Router } = require("express");
const { db, update } = require("./../db");

const router = new Router();

// Turn aircondition ON or OFF
router.get("/:id/:state", async (req, res) => {
  let id = req.params.id;
  let state = req.params.state === "on" ? true : false;

  db.get("devices").find({ id: id }).assign({ on: state }).write();
  update();

  res.send({ msg: `Aircondition ${id} is now ${req.params.state}` });
});

// Change aircondition temperature
router.get("/:id/temperature/:value", async (req, res) => {
  const id = req.params.id;
  const temperature = Number(req.params.value);

  db.get("devices")
    .find({ id: id })
    .assign({ temperature: temperature })
    .write();
  update();

  res.send({ msg: `Aircondition ${id} temperature ${temperature}` });
});

module.exports = router;
