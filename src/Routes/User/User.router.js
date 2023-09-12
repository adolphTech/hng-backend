const express = require("express");
const router = express.Router();
const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
  
} = require("./User.Controller");

//usind name to manipulate
router.route("/:name").post(createPerson)
// Create a new person and with json body
router.route("/").post(createPerson) 

router.route("/:idOrName").get(getPerson).put(updatePerson).delete(deletePerson)    // This will retrieve a person by ID or name

 

module.exports = router;
