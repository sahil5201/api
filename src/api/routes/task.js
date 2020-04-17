const express = require('express')
const router = express.Router();

const DB = require("../../DB/dbFunction")
const Task = require("../../Model/TaskModel")
const nameOfCollection = 'Task';

//Get Data
router.get('/',(req,res,next) => {
    DB.DB_getData(nameOfCollection,res);
})

//by user Id
router.post('/',(req,res,next)=>{
     DB.DB_getData_ByID(nameOfCollection,res,req.body.id);
})

//Add Data
router.post('/addTask',(req,res,next) => {
    Task.TaskModel(req.body)
    res.json({"err":"false","msg":"Data Store"})
})

//Delete Data
router.delete('/deleteTask',(req,res,next) => {
    DB.DB_deleteData(nameOfCollection,req.body.id);
    res.json({"err":"false","msg":"Data Store"})
})

router.post('/deleteTask',(req,res,next) => {
    DB.DB_deleteData(nameOfCollection,req.body.id);
    res.json({"err":"false","msg":"Data Store"})
})


module.exports = router
