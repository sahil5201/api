const con = require("./db")

class dbfunction{
    DB_getData(query,res){
        con.query(query,function(error, results, fields){
          if(!error){ 
            res.json(results); }
        })    
    }

    DB_addData(query,res){
        con.query(query,function(error, results, fields){
          if(!error){ 
            res.json(results); }
        })    
    }

    DB_setData(query,res){
        con.query(query,function(error, results, fields){
          if(!error){ 
            res.json(results); }
        })    
    } 
}

module.exports = new dbfunction();