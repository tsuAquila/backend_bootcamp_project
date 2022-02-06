const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const task = mongoose.model("Task");

router.get("/", (req, res) => {
  res.render("task/addEdit", {
    viewTitle: "Add Task to your To-Do List",
  });
});

router.post("/", (req, res) => {
  addTask(req, res);
});
//function to add task
function addTask(req, res) {
  var Task = new task();
  Task.taskName = req.body.taskName;
  Task.taskDesc = req.body.taskDesc;
  Task.save((err, docs) => {
    if (!err) {
      res.redirect("task/list");
    } else {
      console.log("Error while saving " + err);
    }
  });
}

router.get("/list/edit", (req, res) => {
  res.render("task/edit");
});

router.post("list/edit", (req, res) => {
  editTask(req, res);
});
// function to update task
function editTask(req, res) {
  task.findByIdAndUpdate(req.params.id, (err) => {
    if (!err) {
      res.render("/task/edit");
      var taska = task(req.params.id);
      taska.taskName = req.body.edtaskName;
      taska.taskDesc = req.body.edtaskDesc;
      task.save((err, docs) => {
        if (!err) {
          res.redirect("task/list");
        } else {
          console.log("Error while saving! " + err);
        }
      });
    } else {
      console.log("Error while updating! " + err);
    }
  });
}

//to view task list
router.get("/list", (req, res) => {
  task.find((err, docs) => {
    if (!err) {
      res.render("task/list", {
        list: docs.map((docs) => docs.toJSON()),
      });
    }
  });
});

//to delete
router.get("/delete/:id", (req, res) => {
  task.findByIdAndRemove(req.params.id, (err) => {
    if (!err) {
      res.redirect("/task/list");
    } else {
      console.log("Error in deletion! " + err);
    }
  });
});

module.exports = router;
