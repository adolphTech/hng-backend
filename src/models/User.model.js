const mongoose = require('mongoose');

// Define a Mongoose schema for the "user" resource
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, // Convert email addresses to lowercase
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        // Custom validation function to check if age is greater than or equal to 18
        return value >= 18;
      },
      message: 'Age must be 18 or older',
    },
  },
  phone: {
    type: String,
    trim: true, 
  },
  nationality: {
    type: String,
    trim: true, 
  },
  
});

// Create a Mongoose model for the user
const User = mongoose.model('User', userSchema);

module.exports = User;
