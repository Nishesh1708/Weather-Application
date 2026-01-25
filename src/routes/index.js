const express =  require("express");
const router = express.Router();
const debug = require("debug")("app:routes:index");
const {getWeather} = require("../controller/weather-controller");

router.get("/", function(req, res) {
    debug("landing page");
    res.render("index");
})

router.get("/home", function(req, res) { 
    res.render("home");
})

router.post("/home", getWeather);

module.exports = router;