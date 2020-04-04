var mysql      = require('mysql');
let Data;
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'todo'
});
 
connection.connect();

connection.query({
  sql: 'SELECT * FROM `task`',
  timeout: 40000, // 40s
},function (error, results, fields) {
  getData(results)
}
);

getData = (data) => {
    console.log(data)
}

console.log(Data);

exports = "ABC"