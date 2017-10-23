var express = require('express');
var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var FoodCollection = require('../models/dbInput.js')
var bodyParser = require('body-parser');

router.delete('/info/:id', function (req, res) { 
    console.log('in devour-food route')
    FoodCollection.findByIdAndRemove(req.params.id, function(err, devouredFood){ 
        if(err){
            res.send('error deleting food');
        } else {
            res.send(devouredFood);
        }
    });
}) //end router.delete

module.exports = router;