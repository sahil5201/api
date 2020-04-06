var mysql      = require('mysql');
const admin = require('firebase-admin');

let serviceAccount = require('./key/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();


console.log(db.collection('home-1ffc6'))

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
  console.log(error)
  getData(results)
}
);

getData = (data) => {
    // console.log(data)
}



exports = "ABC"