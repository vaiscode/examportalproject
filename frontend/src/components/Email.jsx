import React, { useState } from 'react'
import E_nav from './E_nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Grid, Typography } from '@mui/material';

let img={
    backgroundImage:`url('https://mrwallpaper.com/images/hd/animated-design-chromebook-background-e3s56alv0sopjtap.jpg')`,
    
    height: "100vh",
    
    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",


}

const Email = () => {

  const[email,setEmail]=useState("");
  const[sub,setSub]=useState("");
  const doc1="https://docs.google.com/document/d/15nq6PJmcIY3jgwPl3BkCMMgmal-pJZGgDGqY46tE9Ew/edit?usp=sharing"
const sendEmail= async(e)=>{
  e.preventDefault();
  console.log(sub);
  const res = await fetch("/mail",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({email,sub})
  
    
    
  });
  console.log(res);
  alert("successfully mailed");
}

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
        <Form.Control type="email"  name='email' onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text"  name='sub' onChange={(e)=>{setSub(e.target.value)}}/>
      </Form.Group>

      <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
  style={{marginLeft:'35%',marginTop:'5%'}}>
  Upload mark sheet
  <input type="file" />
</Button>
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
