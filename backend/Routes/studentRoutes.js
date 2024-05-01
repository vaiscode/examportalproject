const express = require("express");
const router  = express.Router();
const students  = require("../Model/student");

router.use(express.json());


router.post('/',async(req,res)=>{
    try {
        const data = req.body;
        let newStudent = await students(data).save();
        console.log(newStudent);
        res.status(200).send({message:"Data added"})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;