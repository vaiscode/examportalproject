const express = require("express");
const router  = express.Router();
const students  = require("../Model/student");

router.use(express.json());


// router.post('/',async(req,res)=>{
//     try {
//         const data = req.body;
//         let newStudent = await students(data).save();
//         console.log(newStudent);
//         res.status(200).send({message:"Data added"})
//     } catch (error) {
//         console.log(error);
//     }
// })


//login/admin
// router.post('/login/admin',async(req,res)=>{
//     let email = req.body.email;
//     let password = req.body.password;

//     const user = await students.findOne({email:email});
//     if(!user){
//         res.json({message:'Not registered'});
//     }
//     try {
//         if(user.email=='Admin@gmail.com' && user.password=='Admin'){
//             res.send({message:'Logged In'});
//         }
//         else{
//             res.json({message:'Invalid email/password'});
//         }
//     } catch (error) {
        
//     }
// })

router.post('/login/admin', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const admin = await students.findOne({ email: email, role: 'admin' });
  
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
      if (admin.password==password) {
        return res.json({ message: 'Admin logged in successfully', admin });
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
        return res.json({ message: 'Student logged in successfully', user });
      } 
      else {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  });


module.exports = router;