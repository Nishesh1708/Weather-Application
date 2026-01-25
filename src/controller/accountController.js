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
                    return res.redirect("/home");
                })  
            }
        })
    }catch(err) {
        debug(err);
        req.flash("error", "Something went wrong");
        return res.render("register", {flash});
    }
}

module.exports.loginController = async function(req, res) {
    try{
        let {email, password} = req.body;
        let user = await userModel.findOne({ email });
        if(!user){
            req.flash("error", "something went wrong");
            return res.redirect("/account/login");
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if (err) {
                req.flash("error", "Something went wrong");
                return res.redirect("/login");
            }

            if (!result) {
                req.flash("error", "Invalid email or password");
                return res.redirect("/login");
            }
            let token = generateToken(user);
            res.cookie("token", token);
            return res.redirect("/home");
        })
    }catch(err){
        let error = req.flash("error", "something went wrong");
        return res.render("login", {error});
    }
}