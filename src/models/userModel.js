const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email:  String,
    password : String,
    cities: {
        type: [String],
        default:[],
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema);