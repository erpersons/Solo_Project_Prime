var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var foodSchema = new Schema({
//     food: String,
//     days: Number,
//     // username: String //-> no good
// });

var foodSchema = new Schema({ 
    food: String,
    days: Number
 });

var userSchema = new Schema({
    // Array of subdocuments
    nourishment: [foodSchema],
    // Single nested subdocuments. Caveat: single nested subdocs only work
    // in mongoose >= 4.2.0
    // child: childSchema
});

var Foods = mongoose.model('food', foodSchema);

module.exports = Foods;