// var router = require('express').Router();
// var twilio = require('twilio');
// var client = require('twilio')(accountSid, authToken);  //new twilio ?

// var accountSid = process.env.TWILIO_ACCOUNT_SID;
// var authToken = process.env.TWILIO_AUTH_TOKEN;


// router.post('/', function (req, res) {
//     var toSend = req.body.message
//     client.messages.create({
//         body: toSend,
//         to: process.env.MY_PHONE_NUMBER,
//         from: process.env.TWILIO_NUMBER

//     }).then(function () {
//         console.log(req.body);
//     })
// });

// module.exports = router;