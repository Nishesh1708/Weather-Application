const express = require("express");
const router = express.Router();
const {registrastionController, loginController} = require("../controller/accountController");

router.post("/login", function(re,res) {
    
})

router.get("/login", function(req, res) {
    res.render("login");
})

router.get("/register", function(req, res) {
    res.render("register");
})

router.post("/login", loginController);

router.post("/register", registrastionController);


module.exports = router;