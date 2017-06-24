/**
 * Created by 23rharris on 6/28/17.
 * Models should be lean and thin
 */
var mongoose = require('mongoose'); //Provides models to the mongodb database

//Create user object
var UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    personality: {
        type: String,
        required: true
    }


});

//export the user schema
module.exports = UserSchema;