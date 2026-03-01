const weatherModel = require("../models/weatherModel");


module.exports.getWeather =  async function(req, res, next) {
    try{
        const city = req.body.city;
        console.log(city);
        const weatherData = await weatherModel.getWeather(city);
        res.render("home", {saveCities:null,error:null,weatherData});
    }catch(err) {
        next(err);
    }
}
