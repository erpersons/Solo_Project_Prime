var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var foodSchema = new Schema({
    food: String,
    days: Number
});
var Foods = mongoose.model('food', foodSchema);
module.exports = Foods;