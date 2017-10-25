var express = require('express');
var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var FoodCollection = require('../models/dbInput.js')
var bodyParser = require('body-parser');

router.post('/', function (req, res) {

    var newFood = new FoodCollection({
        food: req.body.food,
        days: req.body.days,
        userName: req.body.userName,
        wasted: req.body.wasted,
        cellNumber: req.body.cellNumber,
        date: req.body.date
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
