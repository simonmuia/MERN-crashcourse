const mongoose = require('mongoose');

// initiate a users schema
const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

// create a model out of the schema (collectionName, collectionModel)

const UsersModel = mongoose.model('users', UsersSchema);

module.exports = UsersModel;
