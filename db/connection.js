const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '300atrium',
  database: 'bamazonDB'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected as id' + connection.threadId)
})

module.exports = connection;