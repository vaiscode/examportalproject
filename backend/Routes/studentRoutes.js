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
//for admin dashboard to access batch
// router.get('/view' ,async(req,res)=>{
//     students.find()
//     .then((data)=>{res.json(data);})
//     .catch((err)=>{console.log(err);})
// })



// to display batchwise student
router.get('/:batch',async(req,res)=>{
    try{
    const batch = req.params.batch;
    console.log(batch);
  const data= await students.find({batchName:batch,status:1})
  res.status(200).json(data);
    }
    catch(error)
    {
        res.status(404).send('no data found');
    }
})

module.exports = router;