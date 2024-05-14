const express=require("express");
const router=new express.Router();
const nodemailer=require("nodemailer");
const cors=require('cors');
const bodyParser=require('body-parser');



router.use(bodyParser.json());
router.use(cors());
router.post("/mail",async(req,res)=>{
    const {recipient,subject,doc}=req.body;
    
    // console.log(email);
    console.log(subject);


try {
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }

    });
    const mailOptions = {
        from:process.env.EMAIL,
        to : recipient ,
        subject:subject,
        text:doc
        // html:'<h1>marksheet</h1>',
        // attachments :[{
        //     filename:'for_project.DOCX',
        //     path :doc
        //     }
        // ]
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log("error",error);
        }
        else{
            console.log("email sent");
            res.status(201).json({status:201,info})
        }
    })
} catch (error) {
    res.status(201).json({status:401,error})
}
});

module.exports = router;