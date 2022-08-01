const { Schema, model } = require("mongoose");

const Book = new Schema({
  title: String,
  author: String,
  pictire: String,
  description: String,
  year: Number,
});

module.exports = model("Book", Book);
