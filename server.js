const express = require("express");
// import { connection } from "./routes/html-routes";

const PORT = process.env.port || 3000;

var mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "stock"
});

connection.connect(function(err) {
  err ? console.log(err) : console.log(connection);
});

require("./routes/html-routes")(app);

app.listen(PORT, () => {
  console.log("app listening");
});
