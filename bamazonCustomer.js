const inquirer = require('inquirer');
const connection = require('./db/connection');

function displayProducts() {
  const query = connection.query("SELECT * FROM products", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data.forEach()
    connection.end();
  });
  console.log(query.sql);
}

displayProducts();
// function askUser() {
//   inquirer.prompt([{
//       type: '',
//       message: ''
//     },
//     {

//     }
//   ])
// }