const mongoose = require("mongoose");

require("./db");
var taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
  },
  taskDesc: {
    type: String,
  },
});

mongoose.model("Task", taskSchema);
