import React, { useState } from 'react'
import E_nav from './E_nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let img={
    backgroundImage:`url('https://mrwallpaper.com/images/hd/animated-design-chromebook-background-e3s56alv0sopjtap.jpg')`,
    
    height: "100vh",
    
    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",


}

const Email = () => {
  const navigate = useNavigate();

  const[email,setEmail]=useState({recipient:'',subject:'',doc:''});
  // const[sub,setSub]=useState("");
  // const[doc,setDoc]=useState("");
  // const doc1="https://docs.google.com/document/d/15nq6PJmcIY3jgwPl3BkCMMgmal-pJZGgDGqY46tE9Ew/edit?usp=sharing"

const handleChange=(e)=>{
  const{name,value}=e.target;
  setEmail({...email,[name]:value});
}


const sendEmail= async(e)=>{
  e.preventDefault();
  console.log(email.recipient);
  console.log(email.subject);
  console.log(email.doc);
  axios.post('http://localhost:3000/mail',email)
  .then(respose=>{alert("success");
    navigate('/addash');
  })
  .catch(error=>{console.log(error);});
};

  return (
    <div >
    <div><E_nav/></div>
        <div className="container ">
            <div className='d-flex justify-content-center mt-4'> 
                 <h3>SENDING MAIL</h3>
                 <img src="https://t4.ftcdn.net/jpg/04/76/40/09/360_F_476400933_A4gKwXtlgQFslfSuDvbV35eQcBIDlYjw.jpg" alt="gmail photo" className='mx-3' style={{width:"50px"}} />
            </div>
            <div className='d-flex justify-content-center'>
            <Form className='mt-4 col-lg-4'>
      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='recipient' value={email.recipient} onChange={handleChange} />
      </Form.Group>

      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text"  name='subject' value={email.subject} onChange={handleChange}/>
      </Form.Group>

      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Documenet link</Form.Label>
        <Form.Control type="text"  name='doc' value={email.doc} onChange={handleChange}/>
      </Form.Group>
     
       <br /><br /><br />
       <Button variant="primary" type="submit" style={{marginLeft:'30%'}} onClick={sendEmail} ><SendIcon/>send Mail</Button>
    </Form>
            </div>
        </div>
    <Grid item xs={12}>
    <Box sx={{marginTop:'5em', bgcolor: 'grey', color: 'white', textAlign: 'center', py: 2 }}>
      {/* Footer content */}
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {/* Headquarters */}
        <Grid item>
          <Typography variant="body1">
            <strong>Headquarters:</strong><br />
            <h5>G1, Ground Floor, Thejaswini, Technopark Campus<br />
            Thiruvananthapuram, Kerala, India - 695 581</h5>
          </Typography>
        </Grid>

        {/* Regional Centre (North) */}
        <Grid item>
          <Typography variant="body1">
            <strong>Regional Centre (North):</strong><br />
           <h5> 2nd Floor, UL Cyberpark Building, Nellikode Post<br />
            Kozhikode, Kerala, India - 673 016</h5>
          </Typography>
        </Grid>

        {/* Regional Centre (Central) */}
        <Grid item>
          <Typography variant="body1">
            <strong>Regional Centre (Central):</strong><br />
            <h5>B-Wing, Kanikonna Villa, Infopark Campus<br />
            Koratty, Thrissur, Kerala, India - 680 308</h5>
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
        &copy; {new Date().getFullYear()} ICTAK. All rights reserved.
      </Typography>
    </Box>
  </Grid>
</div>


  )
}

export default Email
