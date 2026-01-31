const express =  require("express");
const router = express.Router();
const debug = require("debug")("app:routes:index");
const {getWeather} = require("../controller/weather-controller");

router.get("/", function(req, res) {
    debug("landing page");
    res.render("index");
})

router.get("/home", function(req, res) { 
    const error = req.flash("error");
    res.render("home",{error,weatherData:null});
})

router.post("/weather", getWeather);

module.exports = router;