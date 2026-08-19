const User = require("../models/userModel");

module.exports.saveCity = async function(req, res) {
    try{
        const {saveCity} =req.body;
        const user = await User.findById(req.user.id);
        user.cities.push(saveCity);
        await user.save();
        req.flash("success", "City saved successfully");
        return res.redirect("/home");
    }catch(err){
        req.flash("error", "Could not save city. Please try again.");
        return res.redirect("/home");
    }
}