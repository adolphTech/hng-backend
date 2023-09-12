const Person = require("../../models/User.model");
const mongoose = require("mongoose")


// @desc Create a new person
// @route POST api/persons/:name
// @access
const createPerson = async (req, res) => {
  try {
    let { name } = req.params;

    // If name is not provided in params, check the JSON body
    if (!name) {
      name = req.body.name;
    }

    // Check if a person with the same name already exists
    const existingPerson = await Person.findOne({ name });

    if (existingPerson) {
      return res.status(400).json({ error: 'Person with this name already exists' });
    }

    // Create a new person record
    const person = await Person.create({ name });

    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};


// @desc Get a specific person by ID or name
// @route GET api/persons/:idOrName
// @access 
const getPerson = async (req, res) => {
  try {
    const idOrName = req.params.idOrName;
    let person;
    console.log(idOrName)

    // Check if the idOrName is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(idOrName)) {
      // If it's a valid ObjectId, query by _id
      person = await Person.findById(idOrName);
    } else {
      // If it's not a valid ObjectId, query by name
      person = await Person.findOne({ name: idOrName });
    }

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// @desc Update a specific person by ID or name
// @route PUT api/persons/:idOrName
// @access Private
const updatePerson = async (req, res) => {
  try {
    const idOrName = req.params.idOrName;
    const updateFields = req.body; // Fields to update

    let person;

    // Check if idOrName is a valid ObjectId (for ID-based update)
    if (mongoose.Types.ObjectId.isValid(idOrName)) {
      person = await Person.findById(idOrName);
    } else {
      // Otherwise, assume it's a name and search by name
      person = await Person.findOne({ name: idOrName });
    }

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Update individual fields
    for (const field in updateFields) {
      // Check if the field exists in the person object and is not undefined
      if (person.schema.paths.hasOwnProperty(field) && updateFields[field] !== undefined) {
        person[field] = updateFields[field];
      }
    }

    // Save the updated person
    const updatedPerson = await person.save();

    res.json(updatedPerson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


  
// @desc Delete a specific person by ID or name
// @route DELETE api/persons/:idOrName
// @access Private
const deletePerson = async (req, res) => {
  try {
    const idOrName = req.params.idOrName;

    let person;

    // Check if idOrName is a valid ObjectId (for ID-based delete)
    if (mongoose.Types.ObjectId.isValid(idOrName)) {
      person = await Person.findByIdAndRemove(idOrName);
    } else {
      // Otherwise, assume it's a name and search by name (case-insensitive)
      person = await Person.findOneAndRemove({ name: idOrName.toLowerCase() });
    }

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
};
