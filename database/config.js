var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3306',
  user     : 'root',
  password : '',
 socket   : 'C:/xampp/mysql/mysql.sock',
  database : 'jsp_eCommerce'
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