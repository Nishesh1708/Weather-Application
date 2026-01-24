const mongoose = require("mongoose");
const debug = require("debug")("app:config:mongoose");
const config = require("config");

mongoose
    .connect(`${config.get(MONGODB_URI)}/weatherApp`)
    .then(function(){
        debug("Connected to MongoDB");
    })
    .catch(function(err) {
        debug("Error connecting to MongoDB", err);
    })

module.exports = mongoose.connection;