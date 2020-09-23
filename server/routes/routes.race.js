const Races = require("express").Router();
const { authenticate } = require("../config/mongoose.config");
const Race = require("../controller/controller.race");

// C
Races.post("/new", Race.create);
// R
Races.get("/", Race.getAll);
Races.get("/:id", Race.getOne);
// U
Races.patch("/update/:id", authenticate, Race.updateOne);
Races.patch("/update/participants/:id", authenticate, Race.updateParticipants);
Races.patch("/remove/:id", Race.removeParticipant);
// D
Races.delete("/delete/:id", authenticate, Race.deleteOne);

module.exports = Races;
