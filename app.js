//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const controller = require("./controllers/controller");
const composeRoutes = require("./routes/routes");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", controller.renderHome);

app.get("/about", controller.renderAbout);

app.get("/contact", controller.renderContact);

app.get("/posts/:postName", controller.renderPost);

app.use("/", composeRoutes);

module.exports = app;
