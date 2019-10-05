const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "stock"
});

module.exports = function(app) {
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM companylist", function(err, data) {
      err ? res.send(err) : res.json({ companylist: data });
    });
  });
};
