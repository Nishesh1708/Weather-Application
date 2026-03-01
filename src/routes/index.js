const express =  require("express");
const router = express.Router();
const debug = require("debug")("app:routes:index");
const {getWeather} = require("../controller/weather-controller");
const {saveCity} = require("../controller/saveCity");
const isLoggedin = require("../middleware/isLoggedin");
const savedCities = require("../middleware/savedCities");
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

router.get("/", function(req, res) {
    debug("landing page");
    res.render("index");
})

router.get("/home", isLoggedin, savedCities, async function(req, res) {
    const error = req.flash("error");
    res.render("home",{saveCities: req.cities,error,weatherData:req.weatherData,user:req.user});
})

router.post("/weather", isLoggedin, getWeather);
router.get("/save/:city", isLoggedin ,async function(req, res, next) {
    try{
        let user = null;
        if(req.cookies.token){
            const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY)
            user = await userModel.findOne({email : decoded.email})
        }
            user.cities.push(req.params.city);
            await user.save();
            req.flash("success", "City saved successfully");
            return res.redirect("/home");
        }catch(err){
            next(err);
        }
});

module.exports = router;
