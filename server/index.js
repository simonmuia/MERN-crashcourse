const express = require('express');
require('dotenv').config();

// import port number and connection string
const connection = process.env.MONGODB_URI;
const port = process.env.PORT;

// initialize express library
const app = express();

// initiate cors
const cors = require('cors');
app.use(cors());

// import mongoose
const mongoose = require('mongoose');

// connect user model to allow querying of datatabse
const UsersModel = require('./models/Users');

// initialize mongo connect
mongoose.connect(connection);

app.listen(port, () => {
  console.log('SERVER STARTED');
});

// initiate initial url
app.get('/', (req, res) => {
  res.send('App is working');
});

// initiate a get request
app.get('/getUsers', async (req, res) => {
  // fetch all  users
  const users = await UsersModel.find();

  // send user data as JSON response.
  res.json(users);
});

// // initiate post request
// app.post();
