var express = require('express');
var router = express.Router();
var book = require('../models/bookModel.js');

router.get('/', function (req, res, next) {
  book.find(function (err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

router.get('/:id', function (req, res, next) {
  book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/', function (req, res, next) {
  book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next){
  book.findByIdAndUpdate(req.params.id, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})

router.delete('/:id', function(req, res, next){
  book.findByIdAndDelete(req.params.id, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})
module.exports = router;
