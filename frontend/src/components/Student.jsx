
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import E_nav from './E_nav';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor'

let imageStyle = {
  
 //  width: "500px",
   backgroundImage:
   'url("https://st.depositphotos.com/1001069/1259/i/450/depositphotos_12595238-stock-photo-nature-blurred-bokeh-background.jpg")',
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   height:'100vh',
 
};



const Student = () =>{
  const location=useLocation();
    const batch=location.state.batch;
    console.log(batch);
    const [rows,setRows]=useState([]);


useEffect(()=>{
  axiosInstance.get("http://localhost:3001/api/"+batch).then((res)=>{
setRows(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })

},[]);






  return (
    <div style={imageStyle}>
      <div>
        <E_nav/>
      </div>
       <div >
      <Placeholder as="p" animation="glow"> <h1 style={{marginLeft:'39%'}}><b>STUDENT LIST</b></h1>
        <Placeholder sm={12}  />
      </Placeholder>
      </div>
    <div>
 <TableContainer component={Paper} style={{width:'75%',marginLeft:'11%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b><i>STUDENT NAME</i></b></TableCell>
            <TableCell align="right"><b><i>DOB</i></b></TableCell>
            <TableCell align="right"><b><i>PHONE NUMBER</i></b></TableCell>
            <TableCell align="right"><b><i>EMAIL</i></b></TableCell>
            <TableCell align="right"><b><i>PASSWORD</i></b></TableCell>
            <TableCell align="right"><b><i>GENDER</i></b></TableCell>
            <TableCell align="right"><b><i>INTERNAL MARK</i></b></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row)=>(
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.mark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
    <div>
    <Button variant="contained" endIcon={<SendIcon />} style={{marginLeft:'45%',marginTop:'5%'}}><Link style={{color:'white',textDecoration:'none'}} to={'/mail'}> Send EMAIL </Link>
 
</Button>&nbsp;&nbsp;&nbsp;&nbsp;
 
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

export default Student