const User = require("../models/userModel");

module.exports.saveCity = async function(req, res) {
    try{
        let user = await User.findById(req.params.id);
        user.cities.push(req.params.city);
        await user.save();
        req.flash("success", "City saved successfully");
        return res.redirect("/home");
    }catch(err){
        req.flash("error", "Could not save city. Please try again.");
        return res.redirect("/home");
    }
}