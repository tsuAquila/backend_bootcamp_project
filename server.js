require("./models/db");
const express = require("express");
const taskController = require("./controllers/taskController");
const path = require("path");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs");

app.listen(7000, () => {
  console.log("express server started");
});

app.use("/task", taskController);
