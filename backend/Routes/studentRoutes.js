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

router.post('/login', async (req, res) => {
  try {
      const email = req.body.email;
      const password = req.body.password;

      const user = await students.findOne({ email: email });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      if (user.role === 'admin') {
          if (user.password !== password) {
              return res.status(401).json({ message: 'Invalid email or password' });
          }
          const payload = { email: email, role: 'admin' };
          const admintoken = jwt.sign(payload, 'adminkey');
          return res.json({ message: 'Admin logged in successfully', admintoken: admintoken });
      } else if (user.role === 'student') {
          if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
          const payload = { email: email, role: 'student' };
          const studenttoken = jwt.sign(payload, 'studentkey');
          return res.json({ message: 'Student logged in successfully', studenttoken, student: { name: user.name, batch: user.batchName, mark: user.mark } });
        
      } else {
          return res.status(401).json({ message: 'Invalid user' });
      }
  } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to fetch student data by email
router.get('/student/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const student = await students.findOne({email:email});

    if (student) {
      return res.json({student});
    } else {
      return res.status(404).json({ message:'Student not found'});
    }
  } catch (error) {
    console.error('Error fetching student data:',error);
    return res.status(500).json({ message:'Error'});
  }
});

//update 

router.put('/submit/:email', async (req, res) => {
  try {
    const updatedStudentData = req.body;
    const data = await students.findOneAndUpdate({ email: req.params.email }, updatedStudentData);
    res.status(200).send({ message: 'Student registration completed successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Internal server error' });
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
  