const express = require('express')
const router = express.Router();

const DB = require("../../DB/dbFunction")

router.get('/',(req,res,next) => {
    DB.DBQuery("select * from task",res);
})

router.post('/addTask',(req,res,next) => {
    console.log(req.body)
    res.status(200).json({
        message:req.body
    })
})


module.exports = router
