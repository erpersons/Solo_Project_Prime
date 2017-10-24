var express = require('express');
var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var FoodCollection = require('../models/dbInput.js')
var bodyParser = require('body-parser');

router.put('/info/:id', function (req, res){
    var query = 'ObjectId("' + req.params.id +'")';
    var whatever = {$set: { 'wasted' : true}, }
    console.log('in waste-food route', query);

    var thrownFood = new FoodCollection({
        food: req.body.food,
        days: req.body.days,
        userName: req.body.userName,
        wasted: req.body.wasted
    });
    thrownFood.findOneAndUpdate(query, whatever, function (err) {
        if (err) {
            console.log('no worky:', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })
}); //end router.put

module.exports = router;