const mongoose = require('mongoose');

// Define a Mongoose schema for the "user" resource
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Add 'unique' here to ensure the name is unique
    lowercase: true, // Convert the name to lowercase before saving
    set: (value) => value.toLowerCase(), // Custom setter to ensure lowercase
  },
});

// Create a Mongoose model for the user
const User = mongoose.model('User', userSchema);

module.exports = User;
