const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.

const taskRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
taskRoutes.route("/tasks").get(function (req, res) {
  let db_connect = dbo.getDb("Merakoni0");
  db_connect
    .collection("tasks")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;

      res.json(result);
    });
});

// add task functionality
taskRoutes.route("/tasks").post(function (req, res) {
  let db_connect = dbo.getDb("Merakoni0");

  let task = { ...req.body };
  console.log("hello", req.body);

  db_connect.collection("tasks").insertOne(task, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// {
//   taskId: 1,
//   description: "Cook Food",
//   label: "Personal",
//   date_created: "12/12/2021",
//   todo_date: "12/26/2021",
//   date_accomplished: "12/26/2021",
// },

// add new task
taskRoutes.route("/tasks/:id").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { taskId: ObjectId(req.params.id) };
  db_connect.collection("tasks").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });

  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, response) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

module.exports = taskRoutes;
