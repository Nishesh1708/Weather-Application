const userModel = require('../models/userModel');
const {generateToken} = require('../utils/generateToken');
const debug = require('debug')('app:controller:registrationController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.registrationController = async function(req, res) {
    try{
        let {name, email, password } = req.body;
        let user = await userModel.findOne({email});
        if(user){
            req.flash("error", "User already exists");
            return res.redirect("/account/register");
        }
        bcrypt.genSalt(10, function(err, salt) {
            if(err){
                debug("Error generating salt", err);
                req.flash("error","Internal Server Error");
                return res.redirect("/account/register");
            }else{
                bcrypt.hash(password, salt, async function(hash) {
                    let user = await userModel.create({
                        name,
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
        return res.redirect("/account/register");
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
                return res.redirect("/account/login");
            }

            if (!result) {
                req.flash("error", "Invalid email or password");
                return res.redirect("/account/login");
            }
            let token = generateToken(user);
            res.cookie("token", token);
            return res.redirect("/home");
        })
    }catch(err){
        req.flash("error", "Something went wrong");
        return res.redirect("/account/login");
    }
}