const DB = require("./db");

class dbfunction {

  //get function
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

  DB_getData_ByID(nameOfCollection, res,user_ID) {
    DB.collection(nameOfCollection)
      .get()
      .then((snapshot) => {
        let Data = [];
        snapshot.forEach((doc) => {
          if(doc.data().userId === user_ID )
          Data.push({ id: doc.id, task: doc.data()});
        });
        res.send(Data);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  }

  //add function
  DB_addData(nameOfCollection, arrayOfDoc) {
    let x = false;
    x = DB.collection(nameOfCollection)
      .add(arrayOfDoc)
      .catch((err) => {
        console.log("Error getting documents", err);
      });
      return x;
  }

//delete fuction
DB_deleteData(nameOfCollection, idOfDoc){
  let deleteDoc = DB.collection(nameOfCollection).doc(idOfDoc).delete();
  console.log(deleteDoc);
}

}

module.exports = new dbfunction();
