const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://aquila:1239@cluster0.rjimv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
