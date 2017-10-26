var router = require('express').Router();
var twilio = require('twilio');
var client = require('twilio')(accountSid, authToken);

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;


router.post('/', function (req, res) {
    console.log('1. req.user.cellNumber->', req.user.cellNumber);
    var toSend = req.body.message
    // var userNum = '+1' + req.user.cellNumber
    client.messages.create({
        body: toSend,
        to: process.env.MY_PHONE_NUMBER,
        // to: '+1' + req.user.cellNumber,
        // to: userNum,
        // to: +19522889418,
        from: process.env.TWILIO_NUMBER
        

    }).then(function () {
        res.sendStatus(200);
        console.log(req.body);
        console.log('user.cellNumber', req.user.cellNumber);
    }).catch(function (err) {
        res.send(500);
        console.log(err);
    })
});

module.exports = router;