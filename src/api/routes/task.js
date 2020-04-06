const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message:"it's GET"
    })
})

router.post('/',(req,res,next) => {
    console.log(req.body)
    res.status(200).json({
        message:"it's POST"
    })
})


module.exports = router
