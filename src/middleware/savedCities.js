const user = require('../models/userModel');
const {getWeather} = require('../controller/weather-controller');
module.exports = async (req, res, next)=>{
    try{
        if(req.user){
            if(req.user.cities.length !=0 ){
                let cities = [];
                for(let i=0;i<req.user.cities.length;i++){
                    cities.push(await req.user.cities[i]);
                }
                req.cities = cities;
                next();
            }
        }else{
            next();
        }
    }catch(err){
        next(err);
    }
}
