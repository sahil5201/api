const express = require('express')
const router = express.Router();

const DB = require("../../DB/dbFunction")
const Schedule = require("../../Model/ScheduleModel")


router.get('/',(req,res,next) => {
    DB.DB_getData('ScheduleTask',res);
})

router.post('/addTask',(req,res,next) => {
    Schedule.ScheduleModel(req.body)
    res.json({"err":"false","msg":"Data Store"})
})


module.exports = router
