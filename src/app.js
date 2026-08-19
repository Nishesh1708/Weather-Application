const express = require("express");
const app = express();
const index = require("./routes/index");
const userRoute = require("./routes/userRoute");
const debug = require("debug")("app:main");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const path = require("path");

require("dotenv").config(path.resolve(__dirname, "../.env"));
require("./config/mongoose-config");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_KEY,
}))
app.use(flash());


debug("Starting application..");
app.use("/", index);
app.use("/account", userRoute);

app.listen(3000);