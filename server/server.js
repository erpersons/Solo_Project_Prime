var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var path = require('path');
//~~~~
require('dotenv').config(); //to source .env

var passport = require('./strategies/mongo.localstrategy');
var sessionConfig = require('./modules/session.config');

//DB Module
var db = require('./modules/db.config.js');

// Route includes
var indexRouter = require('./routes/index.router');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');
var addFood = require('./routes/add-food');
var devourFood = require('./routes/devour-food');


var port = process.env.PORT || 5000;
//~~~
var send = require('./routes/send-sms'); //send
//~~~

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/add-food', addFood);
app.use('/devour-food', devourFood);
//~~~
app.use('/send-sms', send); //send-sms
//~~~

// Catch all bucket, must be last!
app.use('/', indexRouter);

// Listen //
app.listen(port, function(){
   console.log('Listening on port:', port);
});
