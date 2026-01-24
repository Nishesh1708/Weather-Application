const express = reqiure("express");
const app = express();
const { index, userRoute } = require("./routes")
const debug = require("debug")("app:main");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session")
const userRoute = require("../routes/userRoute");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser);
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_KEY
}))
app.use(flash());

debug("Starting application..");
app.get("/", index);
app.get("/account", userRoute);

app.listen(3000);