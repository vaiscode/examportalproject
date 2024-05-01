const express=require("express");
const router=new express.Router();
const nodemailer=require("nodemailer");

router.post("/mail",(req,res)=>{
    const {email}=req.body;
    const {link1}="https://docs.google.com/document/d/15nq6PJmcIY3jgwPl3BkCMMgmal-pJZGgDGqY46tE9Ew/edit?usp=sharing";


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
        to : email ,
        subject:"sending email from react",
        html:'<h1>marksheet</h1>',
        attachments :[{
            filename:'for_project.DOCX',
            path :'https://docs.google.com/document/d/15nq6PJmcIY3jgwPl3BkCMMgmal-pJZGgDGqY46tE9Ew/edit?usp=sharing'
            }
        ]
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