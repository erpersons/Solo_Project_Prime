var express = require('express');
var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');

checkthedate = 'mongodb://localhost:27017/checkthedate'

mongoose.connect(checkthedate);

router.post('/', function (req, res){
    var toAdd = req.body
    console.log(req.body);

})

module.exports = router;