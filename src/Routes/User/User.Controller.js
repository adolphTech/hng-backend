const Person = require("../../models/User.model");

// @desc Create a new person
// @route POST api/persons
// @access 
const createPerson = async (req, res) => {
  try {
    const { name, email, age, phone, nationality } = req.body;
    console.log(req.body)

    // Create a new person record
    const person = await Person.create({
      name,
      email,
      age,
      phone,
      nationality,
    });

    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error)
  }
};

// @desc Get all persons
// @route GET api/persons
// @access 
const getAllPersons = async (req, res) => {
  try {
    // Fetch all persons from the database
    const persons = await Person.find();

    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Get a specific person by ID
// @route GET api/persons/:id
// @access 
const getPerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    res.json(person);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc Update a specific person by ID
// @route PUT api/persons/:id
// @access Private
const updatePerson = async (req, res) => {
  try {
    const personId = req.params.id;
    const updateFields = req.body; // Fields to update

    // Find the person by ID
    const person = await Person.findById(personId);

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

  

// @desc Delete a specific person by ID
// @route DELETE api/persons/:id
// @access Private
const deletePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndRemove(req.params.id);

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
  getAllPersons,
  getPerson,
  updatePerson,
  deletePerson,
};
