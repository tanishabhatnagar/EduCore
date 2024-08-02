const mongoose = require('mongoose');

const Course = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true, // Ensure this is marked as false
  },
});

module.exports = mongoose.model('Course', Course);
