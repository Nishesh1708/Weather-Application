const userModel = require('../models/userModel');
const {generateToken} = require('../utils/generateToken');
const debug = require('debug')('app:controller:registrationController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.registrationController = async function(req, res) {
    try{
        let {username, email, password } = req.body;
        let user = await userModel.findOne({email});
        if(user) return res.status(401).flash('error', "User already exist");
        bcrypt.genSalt(10, function(err, salt) {
            if(err){
                debug("Error generating salt", err);
                return res.status(500).send("Internal Server Error");
            }else{
                bcrypt.hash(password, salt, async function(err, hash) {
                    let user = userModel.create({
                        username,
                        email,
                        password: hash
                    })
                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.redirect("/home");
                })  
            }
        })
    }catch(err) {
        debug(err);
        req.flash("error", "Something went wrong");
        res.render("register", {flash});
    }
}

module.exports.loginController = async function(req, res) {
    try{
        let {email, password} = req.body;
        let user = await userModel.findOne(email);
        bcrypt.compare(password, user.password, function(err, result) {
            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/home");
        })
    }catch(err){
        req.flash("error", "something went wrong");
        res.render("login", {flash})
    }
}