var express = require('express')
var bodyparser = require('body-parser')

var mysql = require('mysql');
var config = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'burgers_db',
    port     : 8889
});

var app = express()

config.connect();
 
config.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
config.end();