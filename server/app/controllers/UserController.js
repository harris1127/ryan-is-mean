/**
 * Created by 23rharris on 6/28/17.
 */
var restful = require('node-restful'); //takes a mongoose model and converts it into a rest api

module.exports = function (app, route) {

    var rest = restful.model(
        'user',
        app.models.user
    ).methods(['get', 'put', 'post', 'delete']);

    //Resister the endpoint with the application
    rest.register(app, route);

    //Return the next
    return function(req, res, next) {
        next();
    };

};