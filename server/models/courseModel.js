// Course.js
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
  teacher: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('Course', Course);
