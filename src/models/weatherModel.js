const axios = require("axios");
const debug = require("debug")("app:models:weatherModel");

module.exports.getWeather = async function(city) {
    try { 
        const API_KEY = process.env.WEATHER_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

        const response = await axios.get(url);
        return response.data;
    }catch(err) {
        debug("Error fetching weather data", err);
    }
}
