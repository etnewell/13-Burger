const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.all(function(data) {
      var burgObject = {
        burger: data
      };
      console.log(burgObject);
      res.render("index", burgObject);
    });
  });

  router.post("/api/burger", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;