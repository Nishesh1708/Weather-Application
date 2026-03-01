const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

module.exports = async (req, res, next) => {
    if(!req.cookies.token){
        req.flash("error","you must be logged in to access this page")
        return res.redirect('/account/login')
    }
    try{
        if(req.cookies.token){
            const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY)
            const user = await userModel
                .findOne({email : decoded.email})
                .select("-password")
            req.user = user
            next()
        }
    }catch(err){
        err.flashMessage = "spomething went wrong";
        err.redirect = "/";
        next(err)
    }
}
