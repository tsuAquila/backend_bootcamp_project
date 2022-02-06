const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/to-do-list-task",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Successfully Connected!");
    } else {
      console.log("!!!Error!!!" + err);
    }
  }
);

require("./project.model");
