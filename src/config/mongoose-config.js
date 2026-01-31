const mongoose = require("mongoose");
const debug = require("debug")("app:config:mongoose");

mongoose
    .connect(`${process.env.MONGODB_URI}/weatherApp`)
    .then(function(){
        debug("Connected to MongoDB");
    })
    .catch(function(err) {
        debug("Error connecting to MongoDB", err);
        console.log("Error connecting to MongoDB", err);
    })

module.exports = mongoose.connection;