var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  bookName: String,
  authorName: String,
  noOfCopies: String,
  edition: String,
  isbn: String,
  date: {type: Date, default: Date.now},
});

const book = mongoose.model('books',bookSchema);
module.exports = book;
