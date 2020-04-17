const express = require('express')
const app = express()
const admin = require("firebase-admin");
var bodyParser = require('body-parser')

//route
const TaskRoute = require("./api/routes/task")
const ScheduleRoute = require("./api/routes/schedule")

app.use(function(req, res, next) {
    //console.log(req.method)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD')
      return res.status(200).json({});
    }    
    next();
  });

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use("/Task",TaskRoute);
app.use("/Schedule",ScheduleRoute);

module.exports = app 