'user strict';

const mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'descubratheworld'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection