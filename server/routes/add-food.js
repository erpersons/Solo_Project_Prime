var express = require('express');
var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var FoodCollection = require('../models/dbInput.js')
var bodyParser = require('body-parser');
// var Foods = {};

// checkthedate = 'mongodb://localhost:27017/checkthedate'

// mongoose.connect(checkthedate);

router.post('/', function (req, res) {
    var toAdd = req.body

    var something = {
        food: req.body.food,
        days: req.body.days,
        userName: req.body.userName
    }
    console.log(something);

    var newFood = new FoodCollection({
        food: req.body.food,
        days: req.body.days,
        userName: req.body.userName
    });
    newFood.save(function (err) {
        if (err) {
            console.log('no worky:', err );
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })

    
});

router.get('/', function (req, res) {
    FoodCollection.find({userName : req.user.username}).then(function (stuff) {
        console.log('req.user.username ->', req.user.username);
        console.log('stuff:', stuff);
        res.send(stuff);
    });
});
module.exports = router;
