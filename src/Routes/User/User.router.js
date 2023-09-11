const express = require("express");
const router = express.Router();
const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
  getAllPersons,
} = require("./User.controller");

// Create a new person and get all persons
router.route("/")
  .post(createPerson) //works
  .get(getAllPersons); //works

// Get, update, and delete a specific person by ID
router.route("/:id")
  .get(getPerson) //works
  .put(updatePerson) //works
  .delete(deletePerson); //works

module.exports = router;
