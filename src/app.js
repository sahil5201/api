const express = require('express')
const app = express()
const admin = require("firebase-admin");

//route
const TaskRoute = require("./api/routes/task")

app.use("/Task",TaskRoute);

module.exports = app 