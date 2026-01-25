const express = require("express");
const router = express.Router();
const {registrationController, loginController} = require("../controller/accountController");

router.post("/login", function(re,res) {
    
})

router.get("/login", function(req, res) {
    let error = req.flash("error");
    res.render("login", {error});
})

router.get("/register", function(req, res) {
    res.render("register");
})

router.post("/login", loginController);

router.post("/register", registrationController);


module.exports = router;