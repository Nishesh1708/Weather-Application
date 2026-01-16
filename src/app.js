const express = reqiure("express");
const app = express();
const { index } = require("./routes")
const debug = require("debug")("app:main");

app.set("view engine", "ejs");

debug("Starting application..");
app.get("/", index);

app.listen(3000);