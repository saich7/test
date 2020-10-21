const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const todoSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  clientId: {
    type: Boolean,
    required: true,
  },
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
