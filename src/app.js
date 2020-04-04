const express = require('express')
const app = express()
const admin = require("firebase-admin");
const con = require('./db')

app.get('/api', function (req, res) {
  res.send("HII");
})

app.get('' , function (req, res) {
    res.send("Node API");
})

console.log(con);
module.exports = app 