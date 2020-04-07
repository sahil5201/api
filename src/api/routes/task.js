const express = require('express')
const router = express.Router();

const DB = require("../../DB/dbFunction")
const Task = require("../../Model/TaskModel")


router.get('/',(req,res,next) => {
    DB.DB_getData('Task',res);
})

router.post('/addTask',(req,res,next) => {
    Task.TaskModel(req.body)
    res.json({"err":"false","msg":"Data Store"})
})


module.exports = router
