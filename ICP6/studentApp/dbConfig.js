var express = require('express');
var http = require('http');
var apiRouter = require('./routes/student');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://naveena:naveena@cluster0-6rknx.mongodb.net/studentDetails?retryWrites=true&w=majority\n', { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist/studentAPP')));
app.use('/students', express.static(path.join(__dirname, 'dist/studentAPP')));
app.use('/student-create', express.static(path.join(__dirname, 'dist/studentAPP')));
app.use('/student-edit/:id', express.static(path.join(__dirname, 'dist/studentAPP')));
app.use('/api', apiRouter);


var port = process.env.PORT || 4000;
app.set('port', port);
var server = http.createServer(app);


server.listen(port, () => {
  console.log('server running on port 4000')});

module.exports = app;
