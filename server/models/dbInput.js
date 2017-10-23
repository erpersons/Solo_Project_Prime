var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var foodSchema = new Schema({
    food: String,
    days: Number,
    userName: String
});



var Foods = mongoose.model('foodSchema', foodSchema);

module.exports = Foods;