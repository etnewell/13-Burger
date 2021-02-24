var mysql = require("mysql");

var connection =  mysql.createConnection({
  host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "k2umomy1cpwmfgig",

  // Your password
  password: "jrv1n4kf6tybyaaa",
  database: "pvy07hdihpbzmsmt"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  });

module.exports = connection;