var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'lrdatabase.cpajrhhjffqz.eu-west-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'admin',
  password : '123456789',
 socket   : 'C:/xampp/mysql/mysql.sock',
  database : 'lrdatabase'
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
