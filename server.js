var express = require("express"), app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));

// CONNECTION
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});
// END CONNECTION

app.get("/test", function (request, response) {
  con.connect(function (err) {
    if (err) throw err;
    // console.log("Connected!");

    var sql = "select * from Cliente";

    con.query(sql, function (err, result) {
      if (err) throw err;
     
      response.end("" + JSON.parse(result));
    });
  });
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();


// app.get("/sayHello", function (request, response) {
//   var user_name = request.query.user_name;
//   response.end("Hello " + user_name + "!");
// });

