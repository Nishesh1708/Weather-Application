const weatherModel = require("../models/weatherModel");


module.exports.getWeather =  async function(req, res) {
    try{
        const city = req.body.city;
        const weatherData = await weatherModel.getWeather(city);
        res.render("weather", {weatherData});
    }catch(err) {
        res.status(500).send("Error fetching weather data");
    }
}