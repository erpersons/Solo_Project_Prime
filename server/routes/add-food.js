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
        days: req.body.days
    }
    console.log(something);

    // FoodCollection.updateOne(({ username: req.body.username },
    //     { $push: { food: { foodName: req.body.foodInput, numDays: req.body.daysInput } } }, {upsert: true}),
    //     function (err, response) {
    //         if (err) {
    //             res.sendStatus(400);
    //             console.log('err', err);
    //         } else {
    //             console.log('Food added!');
    //             res.sendStatus(201);
    //         }
    //     }
    // )

    var newFood = new FoodCollection({
        food: req.body.food,
        days: req.body.days
    });
    newFood.save(function (err) {
        if (err) {
            console.log('no worky');
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })

    
});

router.get('/', function (req, res) {
    FoodCollection.find({}).then(function (stuff) {
        console.log('stuff:', stuff);
        res.send(stuff);
    });
});
module.exports = router;