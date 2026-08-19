const weatherModel = require("../models/weatherModel");


module.exports.getWeather =  async function(req, res) {
    try{
        const city = req.body.city;
        const weatherData = await weatherModel.getWeather(city);
        res.render("home", {error:null,weatherData});
    }catch(err) {
        req.flash("error", "Could not fetch weather data. Please try again.");
        return res.redirect("/home");
    }
}