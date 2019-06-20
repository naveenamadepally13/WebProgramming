var express = require('express');
var router = express.Router();
var student = require('../models/studentModel.js');

router.get('/', function (req, res, next) {
  student.find(function (err, students) {
    if (err) return next(err);
    res.json(students);
  });
});

router.get('/:id', function (req, res, next) {
  student.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/', function (req, res, next) {
  student.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next){
  student.findByIdAndUpdate(req.params.id, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})

router.delete('/:id', function(req, res, next){
  student.findByIdAndDelete(req.params.id, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})
module.exports = router;
