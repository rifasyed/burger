var mysql = require('mysql');
var config = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'burgers_db',
    port     : 8889
})

config.connect(function(e) {
    if (e) throw e
})

module.exports = config