const express = require('express')
const app = express()
const admin = require("firebase-admin");
var bodyParser = require('body-parser')

//route
const TaskRoute = require("./api/routes/task")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/Task",TaskRoute);

module.exports = app 