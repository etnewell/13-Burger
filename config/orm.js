var connection = require("./connection.js");

const Orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        return result;
      });
    },
    editBurger: function(newBurgName, newDevBoo, burgerID) {
      var queryString =
        "UPDATE burgers SET burger_name = '?', devoured = ? WHERE id = ?";
  
      connection.query(
        queryString,
        [newBurgName, newDevBoo, burgerID],
        function(err, result) {
          if (err) throw err;
          return result;
        }
      );
    },
    burgerInsert: function(burgerName, isDevoured) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??, ??);";
        connection.query(queryString, [burgerName, isDevoured], function(err, result) {
          if (err) throw err;
          return result;
        });
      },
  };
  
  module.exports = Orm;
  console.log(Orm.selectAll);
  console.log(Orm.editBurger);
  console.log(Orm.burgerInsert);