const express =  require("express");
const router = express.Router();
const debug = require("debug")("app:routes:index");
const {getWeather} = require("../controller/weather-controller");
const {saveCity} = require("../controller/saveCity");
const isLoggedin = require("../middleware/isLoggedin");

router.get("/", function(req, res) {
    debug("landing page");
    res.render("index");
})

router.get("/home", isLoggedin ,function(req, res) { 
    const error = req.flash("error");
    res.render("home",{error,User:req.user,weatherData:null});
})

router.post("/weather", isLoggedin,getWeather);
router.post("/save-city", isLoggedin ,saveCity);

module.exports = router;