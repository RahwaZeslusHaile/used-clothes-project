require ('./Server/app');
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.NODE_ENV === 'test' ? process.env.MONGODB_TEST : process.env.MONGODB_DEV;

mongoose.connect(uri)
  .then(() => console.log(' Connected to MongoDB'))
  .catch(err => console.log(' MongoDB connection error', err.message));

