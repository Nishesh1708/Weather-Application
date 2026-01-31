const express = require("express");
const router = express.Router();
const {registrationController, loginController} = require("../controller/accountController");

router.get("/login", function(req, res) {
    const error = req.flash("error");
    res.render("login", {error});
})

router.get("/register", function(req, res) {
    const error = req.flash("error");
    res.render("register", { error });
})

router.post("/login", loginController);

router.post("/register", registrationController);


module.exports = router;