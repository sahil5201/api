const DB = require("./db");

class dbfunction {
  DB_getData(nameOfCollection, res) {
    DB.collection(nameOfCollection)
      .get()
      .then((snapshot) => {
        let Data = [];
        snapshot.forEach((doc) => {
          Data.push({ id: doc.id, task: doc.data() });
        });
        res.send(Data);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  }

  DB_addData(nameOfCollection, arrayOfDoc) {
    let x = false;
    x = DB.collection(nameOfCollection)
      .add(arrayOfDoc)
      .catch((err) => {
        console.log("Error getting documents", err);
      });
      return x;
  }
}

module.exports = new dbfunction();
