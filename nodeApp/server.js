var express = require('express');
var app = express();
var fs = require("fs");
var mysql      = require('mysql');

app.get('/listUsers',function (req,res){
  fs.readFile(__dirname +"/"+"users.json", 'utf8', function (err, data) {
       console.log( data );
       console.error(err);
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With, Content-Type");
        res.header('Access-Control-Allow-Methods','GET, POST, DELETE, PUT');
       res.end( data );
   });
   

})
app.get('/mysql', function (req,res) {
  var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'college'
})

connection.connect(function(err){
  if (err) throw err
   res.send('connected App');
})
  
})


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'college'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/create",function(req,res){
connection.query('SELECT * from student',function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});




var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})