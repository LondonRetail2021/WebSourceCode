var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-1.cwftzhp9wavv.eu-west-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'admin',
  password : '12345678',
 socket   : 'C:/xampp/mysql/mysql.sock',
  database : 'LondonRetail'
});

connection.connect(function(err) {
    if (err){
      console.log(err);
      throw err;
    } else {
      console.log('DB connected :)');
    }
});

module.exports = connection;

//test test
