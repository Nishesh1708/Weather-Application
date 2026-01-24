const express =  require("express");
const router = express.Router();
const debug = require("debug")("app:routes:index");
const {getWeather} = require("../weather-controller");

router.get("/", function(req, res) {
    res.render("landingPage");
})

router.get("/home", function(req, res) { 
    res.render("home");
})

router.post("/home", getWeather);

module.exports = router;