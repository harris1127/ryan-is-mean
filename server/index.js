/*
    Configuring modules for use
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan'); //logs every request to the console
var _ = require('lodash'); // following standard for lodash variable

var app = express(); //creating the express application

/*
    Adds necessary modules for api
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override')); //Gives me the ability to use http methods

/*
    Adds necessary modules for angular/front-end
 */
app.use(express.static('./client'));        // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console


//Adds support for Cross Origin Resource Sharing -- allows us to expose our apis (No security)
app.use(function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();

});

//Points to the index to serve front-end and angular
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/client/app/index.html');
});

//Connects to mongodb (localhost is the server)
mongoose.connect('mongodb://localhost/ryan-is-mean');
mongoose.connection.once('open', function () {

    //load the models  -  models are injected into the client
    app.models = require('./app/models/index');

    //Registering the routes
    var routes = require('./app/routes/routes');
    _.each(routes, function (controller, route) {

        app.use(route, controller(app, route));

    });

    console.log('Listening to client on port 9080');
    app.listen(9080);

});