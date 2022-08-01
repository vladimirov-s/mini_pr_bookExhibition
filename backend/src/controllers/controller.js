const bookModel = require("../models/book-model");

module.exports.createBook = async (req, res) => {
  try {
    const body = req.body;
    const result = await bookModel.create(body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.getOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await bookModel.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.deletOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await bookModel.findByIdAndDelete(id, {
      returnDocument: "after",
    });
    res.status(200).json(deleted);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports.getBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
