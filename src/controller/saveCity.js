const User = require("../models/userModel");

module.exports.saveCity = async function(req, res, next) {
    try{
        let user = await User.findById(req.params.id);
        user.cities.push(req.params.city);
        await user.save();
        req.flash("success", "City saved successfully");
        return res.redirect("/home");
    }catch(err){
        next(err);
    }
}
