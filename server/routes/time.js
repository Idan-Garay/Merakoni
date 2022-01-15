const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.

const timeRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the time entries.
timeRoutes.route("/time").get(function (req, res) {
  let db_connect = dbo.getDb("Merakoni0");
  db_connect
    .collection("entries")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;

      res.json(result);
    });
});

// add time entry functionality
timeRoutes.route("/time").post(function (req, res) {
  let db_connect = dbo.getDb("Merakoni0");

  let time = { ...req.body };

  if (db_connect === undefined) {
    printf("Something went wrong with connecting to db Merakoni0");
  } else {
    db_connect.collection("entries").insertOne(time, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  }
});

module.exports = timeRoutes;
