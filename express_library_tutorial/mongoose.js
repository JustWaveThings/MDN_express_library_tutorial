const mongoose = require('mongoose');

// define schema

const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// create model

const SomeModel = mongoose.model('SomeModel', SomeModelSchema);
