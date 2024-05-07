const express = require("express");
const router  = express.Router();
const jwt = require('jsonwebtoken');
const students  = require("../Model/student");

router.use(express.json());

function verifytoken (req,res,next){

  const token = req.headers.token;
  try {
    if(!token) throw 'Unauthorized access';
    let payload = jwt.verify(token,'adminkey');
    if(!payload) throw 'Unauthorized access';
    next()
  } catch (error) {
    res.status(404).send('Error')
  }
  
}

function verifystudenttoken (req,res,next){

  const token = req.headers.token;
  try {
    if(!token) throw 'Unauthorized access';
    let payload = jwt.verify(token,'studentkey');
    if(!payload) throw 'Unauthorized access';
    next()
  } catch (error) {
    res.status(404).send('Error')
  }
  
}

//login/admin
router.post('/login/admin', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const admin = await students.findOne({ email: email, role: 'admin' });
  
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      if (admin.password==password) {
        let payload = {email:email,password:password};
        let admintoken = jwt.sign(payload,'adminkey');

        return res.send({ message: 'Admin logged in successfully', token:admintoken });
      }
      else{
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  });

//login/student
router.post('/login/student', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

       const user = await students.findOne({ email:email, role: 'student' });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (user.password==password) {
        let payload = {email:email,password:password};
        let studenttoken = jwt.sign(payload,'studentkey');

        return res.json({ message: 'Student logged in successfully', token:studenttoken });
      } 
      else {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  });


//for admin dashboard to access batch
// router.get('/view' ,async(req,res)=>{
//     students.find()
//     .then((data)=>{res.json(data);})
//     .catch((err)=>{console.log(err);})
// })



// to display batchwise student
router.get('/:batch',async(req,res)=>{
    try
    {
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