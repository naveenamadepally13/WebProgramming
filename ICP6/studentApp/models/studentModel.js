var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  address: String,
  phoneNo: String,
  date: {type: Date, default: Date.now},
});

const student = mongoose.model('students',studentSchema);
module.exports = student;
